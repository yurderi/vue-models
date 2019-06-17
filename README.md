# vue-models

> A better way to use entities in vue.js

### Requirements
- axios
- vue

### Basic usage

```js
import Vue from 'vue'
import VueModels from '@yurderi/vue-models'
import axios from 'axios'

Vue.use(VueModels, {
    modelsDir: './models/',
    http: axios.create()
})

// ... later

Vue.models.user.list().then(users => {
    console.log(users)
})

// ... or

Vue.component('v-test', {
    data: () => ({
        items: []
    }),
    mounted() {
        this.$models.user.list().then(users => this.items = users)
    }
})
```

### API Documentation

| Method                                         | Description                                      |
|------------------------------------------------|--------------------------------------------------|
| public create ()                               | Creates an empty model containing default values |
| public save (data: Array)                      | Creates/saves a model entity                     |
| public get (id: Integer)                       | Gets a model by id                               |
| public remove (model: Object)                  | Removes a model by object (identified by id)     |
| public list (params: Object)                   | List all models with additional params           |
| public filter (models: Object, search: String) | Filter a set of models by search phrase          |
| private __normalizeRow (data: Object)          | Applies types to model fields                    |