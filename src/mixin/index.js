export const mixins = {
    data() {
      return {};
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        trim: function (num) {
            let res = num;
            res.replace(/(^\s*)|(\s*$)/g, "");
            return res;
        }
    },
  };