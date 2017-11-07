class GetData  {

  constructor() {
    const apiUrl = 'http://li468-9.members.linode.com';

    this.pagesEndpoint = `${apiUrl}/wp-json/wp/v2/pages`;
    this.postsEndpoint = `${apiUrl}/wp-json/wp/v2/posts`;

  }

  api(endpoint) {
    return fetch(endpoint)
      .then(response => response.json());
  }

  getPages(cb) {
    this.api(this.pagesEndpoint)
      .then(response => {
        this.getPosts(response, cb)
      })
    // fetch(this.pagesEndpoint)
    //   .then((response) => {
    //     console.log(response)
    //   })
    console.log("getPages");
    // cb();
  }

  getPosts(pages, cb) {
    this.api(this.postsEndpoint)
      .then((response) => {
      const posts = response;
      const data = { pages, posts };
      console.log(data)
      //call dispatch here with data
      cb(data) //use for dynamic routing
    })
  }

}

export default new GetData();
