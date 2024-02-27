import { useState, useEffect } from 'react'
import Container from "../components/container"
import SearchForm from '../components/searchForm'
import Spinner from '../components/spinner'
import API from "../utils/api"


const SearchPage = () => {
    const [term, setTerm] = useState('React')
    const [loading, setLoading] = useState(false)
    const [repos, setRepos] = useState([])
    const [savedRepos, setSavedRepos] = useState([])

    const searchRepos = async () => {
        if (term) {
            try {
                setLoading(true)
                console.log('Searching repos ...', term)
                const response = await API.searchRepos(term)
                console.log(response)
                setRepos(response.data.items)
                } catch(err) {
                    console.log(err)
            } finally {
                setLoading(false)
            }
        }
    }
        


    return (
        <Container className ="mt-3">
<h1>Search Github Repos: <span className="badge bg-secondary">{term}</span></h1>
<SearchForm 
    term={term}
    setTerm={setTerm}
    handleSubmit={searchRepos}
    />

        {loading
            ? <Spinner />
            : <pre>{JSON.stringify(repos, null, 2) }</pre>
    }
        
</Container>
    )

}

export default SearchPage