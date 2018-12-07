import Reace ,{ Component } from 'react'
import Head from 'next/head'

class Index extends Component {
    render () {
        return (
            <div>
                <Head>
                    <meta charset="utf-8" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/static/css/style.css" />
                </Head>
                <p>NEXT</p>
            </div>
        )
    }
}



export default Index