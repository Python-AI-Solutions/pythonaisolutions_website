const React = require('react')

const createMotionComponent = (Component) => {
  const MotionComponent = React.forwardRef((props, ref) => {
    const {
      children,
      animate,
      initial,
      exit,
      transition,
      variants,
      whileHover,
      whileTap,
      whileInView,
      viewport,
      ...rest
    } = props
    return React.createElement(Component, { ...rest, ref }, children)
  })
  MotionComponent.displayName = `motion.${Component}`
  return MotionComponent
}

module.exports = {
  motion: {
    div: createMotionComponent('div'),
    span: createMotionComponent('span'),
    button: createMotionComponent('button'),
    a: createMotionComponent('a'),
    svg: createMotionComponent('svg'),
    section: createMotionComponent('section'),
    article: createMotionComponent('article'),
    header: createMotionComponent('header'),
    footer: createMotionComponent('footer'),
    main: createMotionComponent('main'),
    nav: createMotionComponent('nav'),
    aside: createMotionComponent('aside'),
    h1: createMotionComponent('h1'),
    h2: createMotionComponent('h2'),
    h3: createMotionComponent('h3'),
    h4: createMotionComponent('h4'),
    h5: createMotionComponent('h5'),
    h6: createMotionComponent('h6'),
    p: createMotionComponent('p'),
    ul: createMotionComponent('ul'),
    ol: createMotionComponent('ol'),
    li: createMotionComponent('li'),
    img: createMotionComponent('img'),
    form: createMotionComponent('form'),
    input: createMotionComponent('input'),
    textarea: createMotionComponent('textarea'),
    label: createMotionComponent('label'),
  },
  AnimatePresence: ({ children }) => children,
  useScroll: () => ({
    scrollY: { current: 0 },
    scrollYProgress: { current: 0 },
  }),
  useTransform: (value, input, output) => ({
    current: output ? output[0] : 0,
    get: () => (output ? output[0] : 0),
  }),
  useMotionValue: (initial) => ({
    current: initial,
    get: () => initial,
    set: jest.fn(),
  }),
  useInView: () => true,
  useReducedMotion: () => false,
  useAnimation: () => ({
    start: jest.fn(),
    set: jest.fn(),
    stop: jest.fn(),
    mount: jest.fn(),
  }),
  useMotionTemplate: () => '',
  useSpring: (value) => value,
  useVelocity: () => ({ current: 0 }),
  useIsPresent: () => true,
  useDragControls: () => ({ start: jest.fn() }),
}
