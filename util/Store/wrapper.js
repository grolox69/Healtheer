import { createWrapper } from 'next-redux-wrapper'
import getStore from ".";

const initStore = () => getStore();

export const wrapper = createWrapper(initStore);

export default wrapper;