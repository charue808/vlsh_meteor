PageContents = new Mongo.Collection('pagecontents');
PageContents.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Details for block",
    autoform: {
      afFieldInput: {
        type: 'summernote',
      }
    }
  }
}));
