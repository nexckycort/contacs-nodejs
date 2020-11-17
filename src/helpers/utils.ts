export default {
  pick: (object: Object, propiedades: any[]) => {
    return JSON.parse(JSON.stringify(object, propiedades));
  }
};
