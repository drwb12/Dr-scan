<template>
  <div v-if="this.question" class="postion-relative">
    <img src="@/assets/img/photo_2022-10-19_02-46-36-removebg-preview 2.svg" class="img-fluid personBody" alt="">

    <p class="text-center mt-4 mb-4">{{ counterQuestion + 1 }} /{{ question.length }}</p>
    <h4 class="text-center mt-4 mb-4">{{ ques.ques }}</h4>
    <div class="form-group question mt-4">
      <input type="radio" name="question" id="yes" value="yes" v-model="ans">
      <label for="yes">Yes</label>
    </div>
    <div class="form-group question mt-4">
      <input type="radio" name="question" id="no" value="no" v-model="ans">
      <label for="no">No</label>
    </div>
    <div class="form-group question mt-4">
      <input type="radio" name="question" id="donot" value="Don't Know" v-model="ans">
      <label for="donot">Don't Know</label>
    </div>
    <div class="d-block">
      <button class="btn-back btn mt-4 w-15 d-inline mr-auto" style="float: left;" @click.prevent="prevquestion()">
        &lt; Back</button>
      <button class="btn-next btn mt-4 w-15 d-inline ml-auto" style="float: right;"
        @click.prevent="nextquestion()"  :class="ans == '' ? 'd-none' : ''">Next</button>
      <div style="clear: both;"></div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      counterQuestion: 0,
      ques: '',
      ans: '',
      answer: [],
      question: [
        {
          id: 1,
          ques: 'Lorem'
        },
        {
          id: 2,
          ques: 'Lorem Lorem'
        },
        {
          id: 5,
          ques: 'Lorem Lorem Lorem'
        },
        {
          id: 6,
          ques: 'Lorem Lorem Lorem Lorem Lorem Lorem'
        },
        {
          id: 8,
          ques: 'Lorem Lorem Lorem Lorem Lorem'
        }

      ]

    }
  },
  beforeMount() {
    this.ques = this.question[0]
    console.log(this.question)
  },
  methods: {
    nextquestion() {
      this.answer.push(this.ans)
      this.counterQuestion++
      this.ans = ""
      this.ques = this.question[this.counterQuestion]
      this.$emit('answer', this.answer);

      if (this.question.length < (this.counterQuestion + 1)) {
        this.$emit('add', 1);
      }
    },
    prevquestion() {
      if (this.counterQuestion == 0) {
        this.$emit('minus', 1)
      } else {
        this.answer.pop()
        this.ques = this.question[this.counterQuestion - 1]
        this.counterQuestion--
      }
    },

  },
}
</script>

<style>

</style>
