import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'raf/polyfill' // http://fb.me/react-polyfills
import 'regenerator-runtime/runtime'

configure({ adapter: new Adapter() })
