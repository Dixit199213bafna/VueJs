<template>
   <div class="container">
     <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
     <app-new-quote @createNew="quoteAdded"></app-new-quote>
    <app-quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></app-quote-grid>
     <div class="row">
       <div class="co-sm-12 text-center">
         <div class="alert alert-info">
           Info: Click on quote to delete it
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import QuoteGrid from "./comonents/QuoteGrid";
import NewQuote from "./comonents/NewQuote";
import Header from "./comonents/Header";
export default {
  data: function() {
    return {
      quotes: ['Dixit Quotes'],
      maxQuotes: 10
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header,
  },
  methods: {
    quoteAdded(quote) {
      if(this.quotes.length >= this.maxQuotes) {
        return alert('Please delete quote first');
      }
      this.quotes.unshift(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
}
</script>
