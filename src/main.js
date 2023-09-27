import { createApp } from 'vue'
import './style.scss'
import confettiModule from "canvas-confetti";
import {hello} from "./components/hello.js";

confettiModule()

// createApp(App).mount('#app')

hello();