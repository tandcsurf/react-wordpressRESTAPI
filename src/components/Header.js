import React from 'react';
import { Link } from 'react-router-dom'
import sortBy from 'lodash/sortBy'

export default class Header extends React.Component {

  render() {
    let pages = sortBy(this.props.pages, [page => page.id])
    console.log(pages, "pages in Header after sort")
    return(
      <div style={styles.header}>
      <Link to="/">Home</Link>
      {
        pages.map((page, i) => {
          if (page.slug !== 'home') {
            return (
              <Link key={i} to={`/${page.slug}`}>{page.title.rendered}</Link>
            )
          }
        })
      }
      </div>
    )
  }
}

const styles = {
  header: {
    width: '70%',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '1rem',
  }
}
