import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src
import { mapGetters } from "typed-vuex-wrapper"

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters({one: "moduleOne/propertyOne", two: "moduleOne/propertyTwo"}),
    AComputed(): string | null {
      return this.one;
    },
    AComputed2() {
      return this.$store.getters["moduleOne/propertyOne"];
    },
    
  },
  methods: {
    doStuff(value: string) {
      this.$store.dispatch("moduleOne/SET_PROPERTY_ONE", "test!!");
    }
  }
});