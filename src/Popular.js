import React, {Component} from 'react';
var PropTypes = require('prop-types');
var api = require('../utils/api');

function SelectLanguage(props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='languages'>
            {languages.map((lang)=> {
                return (
                    <li
                        style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}

function RepoGrid(props) {
    return (
        <ul className="popular-list row">
            {props.repos.map((repo, index)=> {
                return (
                    <li key={repo.name} className="col-sm-3 repo-list">
                        <p>{`# ${index+1}`}</p>
                        <p>{repo.name}</p>
                        <img
                            src={repo.owner.avatar_url}
                            alt={`Avatar For ${repo.owner.login}`}
                            width="200"
                            height="200"
                        />
                        <p>{`Number Of Stars: ${repo.stargazers_count}`}</p>
                        <p>{`Repo Owner: ${repo.owner.login}`}</p>
                    </li>
                )
            })}
        </ul>
    )
}


SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

class Popular extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null,
    };

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage = (lang)=> {
        this.setState({
            selectedLanguage: lang,
            repos: null,
        });
        api.fetchPopularRepos(lang)
            .then((repos)=> {
                this.setState({repos: repos})
            })
    };

    render() {
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!this.state.repos
                    ? <p>LOADING REPOS</p>
                    : <RepoGrid repos={this.state.repos}/>
                }
            </div>
        )
    }
}

export default Popular;