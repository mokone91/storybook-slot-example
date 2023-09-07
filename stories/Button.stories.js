import MyButton from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
    default:{
      control:{
        type:'text'
      }
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  render: (args) => ({
    components: {
      MyButton,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MyButton v-bind='args'>{{ args.default }}</MyButton>
    `,
  }),
  args: {
    default:'default slot content',
  }
};
