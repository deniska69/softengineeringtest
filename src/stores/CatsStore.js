import {action, observable, makeAutoObservable, values} from 'mobx';
import {fetchCatAPI, getCatAPI} from '../services/api';
import {Alert} from 'react-native';

export default class CatsStore {
  constructor() {
    this.page = 0;
    this.items = observable.map({});
    this.load = false;

    makeAutoObservable(this);
  }

  setItems = action(items => {
    items.forEach(item => this.items.set(item?.id, item));
  });

  getNext = action(() => {
    this.setLoad();

    fetchCatAPI(this.page)
      .then(res => this.setItems(res))
      .catch(() => Alert.alert('Ошибка загрузки.'))
      .finally(() => this.setLoad(false));
  });

  setLoad = action((value = true) => (this.load = value));

  get data() {
    return values(this.items) || [];
  }

  get isLoading() {
    return this.load;
  }

  getItem = id => {
    const item = this.items.get(id);

    if (item) {
      return item;
    } else {
      getCatAPI(id)
        .then(res => {
          this.setItems([res]);
          return res;
        })
        .catch(() => Alert.alert('Ошибка загрузки.'))
        .finally(() => this.setLoad(false));
    }
  };
}
