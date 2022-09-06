import { callFetchCreateUI } from "./fetch.js";
import { applyLanguage, setLanguage, lang } from "./language-switcher.js";
import { timeoutModalInitFns } from "./idle-timer-tier-2-timeout-modal.js";
import {
  removeIdleTimerTier1,
  setupIdleTimerTier1,
} from "./idle-timer-tier-1-background.js";

callFetchCreateUI();

// Determine if there was a language previously set
if (localStorage.getItem("langState")) {
  setLanguage(localStorage.getItem("langState"));
}

// Apply the language specified in current "langState"
applyLanguage(lang.langState);

timeoutModalInitFns();
setupIdleTimerTier1();
