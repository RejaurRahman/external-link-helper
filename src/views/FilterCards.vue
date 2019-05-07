<template>
  <div>
    <div class="container filter-card-container">
      <div class="level custom_padding filter-card-inner">
        <div class="level-right">
          <div class="level-item">
            <div class="field">
              <div class="select">
                <select class="select-dropdown" v-model="selectedCategory">
                  <option value="">Choose All cards</option>
                  <option v-for="(item,index) in links_category" :key="index" :value="item">{{ item }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-multiline custom_padding filter-main-container">
        <div class="column is-3 filter-card-column" v-for="(item, index) in json" :key="index">
          <div class="filter-card" v-match-heights="{ el: ['.filter-link-title', '.filter-description'] }">
            <a :href="item.url" target="_blank">
              <div class="filter-top-section">
                <div class="filter-image-section">
                  <img :src="require('../assets/images/' + item.cardImage + '.jpg')"> 
                </div>
              </div>
              <div class="filter-bottom-section">
                <div class="filter-inner-bottom-section">
                  <div class="filter-link-section">
                    <div class="filter-link-block">
                      <span class="filter-link-title">{{ item.heading }}</span>
                    </div>
                  </div>
                  <div class="filter-link-content">
                    <div class="filter-content-inner">
                      <span class="filter-description" v-html="item.description"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import links from '../assets/js/links-data'
  
  export default {
    name:'filterCards',

    data () {
      return {
        selectedCategory: '',
        isSearching: false,
        linksData: links,
      }
    },
    watch: {
      selectedCategory (category) {
        if (isNaN(category)) {
          this.isSearching = true
          
          var selectedCategory = this.selectedCategory
          
          var newArray = links.filter(function (currentValue, index, a) {
            if (currentValue.category.includes(selectedCategory)) {
              return currentValue
            }
          }, selectedCategory)
          
          this.json = newArray

        } else {
          this.json = links
        }
      }
    },
    computed: {
      links_category () {
        var all_categories = []

        links.map(function (currentValue, index, a) {
          all_categories.push(currentValue.category)
        })
        
        return all_categories
      },
      json: {
        get () {
          if (this.linksData) {
            return this.linksData
          } else {
            return null
          }
        },
        
        set (value) {
          if (value) {
            this.linksData = value
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
