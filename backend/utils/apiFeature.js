class Apifeatures {
  constructor(query, querystr) {
    this.query = query;
    this.querystr = querystr;
  }

  search() {
    const keyword = this.querystr.keyword
      ? { name: { $regex: this.querystr.keyword, $options: 'i' } }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.querystr };
    const removeField = ['keyword', 'page', 'limit'];

    removeField.forEach((element) => {
      delete queryCopy[element];
    });
    // for range value
    console.log(queryCopy);
    let queryString = JSON.stringify(queryCopy);

    queryString = queryString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (element) => `$${element}`
    );

    console.log(JSON.parse(queryString));
    console.log(queryString);
    this.query = this.query.find(JSON.parse(queryString));

    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.querystr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}
module.exports = Apifeatures;
