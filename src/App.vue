<template>
  <div>
   	<filter-cards />
  </div>
</template>

<script>
  import './assets/bulma.sass';
	import FilterCards from './views/FilterCards.vue'
	
	export default {
  	name: 'app',

  	components:{
   		'filter-cards': FilterCards,
  	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $white: #FFF;
  $grey: #f7f7f7;
  $black: #000;

  .filter-card-container {
    padding: 5rem 0rem;
    @media screen and (max-width: 1087px) {
      padding-left: 1.875rem;
      padding-right: 1.875rem;
    }
    .filter-main-container {
      @media screen and (min-width: 640px) and (max-width: 800px) {
        display: flex;
        flex: none;
      }
    }
    .filter-card-column {
      @media screen and (min-width: 640px) and (max-width: 800px) {
        width: 50%;
        flex: none;
      }
      @media screen and (max-width: 639px) {
        width: 100%;
      }
    }
    .filter-card-inner {
      margin-bottom: 0rem;
      padding-bottom: 5rem;
      .level-right {
        justify-content: center;
        width: 100%;
      }
      @media screen and (max-width: 800px) {
        flex-direction: column;
        .level-right {
          width: 100%;
          .level-item {
            width: 100%;
            .field {
              width: 100%;
            }
          }
        }
      }
      .select-dropdown {
        background: $white url(./assets/images/dropdown-arrow.png);
        background-repeat: no-repeat;
        background-size: 42px;
        background-position: 94% 28px;
        color: $black;
        border: none;
        margin-left: auto;
        margin-right: auto;
        appearance: none;
        height: 75px;
        width: 350px;
        text-align: center;
        text-align-last: center;
        text-transform: uppercase;
        border-radius: 48px;
        box-shadow: 1px 1px 15px rgba($black, 0.14);
        border: 1px solid rgba($white, 0);
        font-size: 1.125rem;
        font-weight: 800;
        &:focus {
          outline: none;
        }
        @media screen and (max-width: 800px) {
          width: 100%;
          font-size: 1rem;
        }
      }
    }
  }

  .filter-card {
    font-size: 1rem;
    background-color: $white;
    background-image: radial-gradient(circle at center, $white 0, $grey 100%);
    position: relative;
    &::before {
      content: "";
      box-shadow: 1px 1px 15px rgba($black, .14);
      border: 1px solid hsla(0, 0%, 100%, 0);
      position: absolute;
      pointer-events: none;
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
    }
    .filter-top-section {
      overflow: hidden;
      position: relative;
      z-index: 3;
      .filter-image-section {
        position: relative;
      }
    }
    .filter-bottom-section {
      padding: 1.563rem 1.5rem 1.5rem 2rem;
      background: none;
      word-break: break-word;
      .filter-inner-bottom-section {
        .filter-link-section {
          position: relative;
          z-index: 5;
          margin: 0rem 0rem 0.125rem 0.0625rem;
          .filter-link-block {
            font-weight: 400;
            display: inline-table;
            font-size: 15px;
            color: $black;
            margin: 0rem .6em .2em 0rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: default;
            vertical-align: middle;
            font-size: 0.9375rem;
            color: $black;
            span {
              &.filter-link-title {
                display: inline-block;
                color: inherit;
                padding: .2em 0rem;
                color: $black;
              }
            }
          }
        }
        .filter-link-content {
          font-size: 1.35em;
          line-height: 1.15;
          font-weight: 400;
          margin-bottom: .25em;
          color: inherit;
          &::before, &::after {
            content: "";
            position: absolute;
            left: 0px;
            top: 0px;
            bottom: 0px;
            right: 0px;
            z-index: 4;
            background: hsla(0, 0%, 100%, .001);
          }
          .filter-content-inner {
            span {
              &.filter-description {
                z-index: 3;
                position: relative;
                color: inherit;
                background: inherit;
                display: block;
                color: $black;
              }
            }
          }
        }
      }
    }
  }
</style>
