// Timeout Modal
const timeoutModal = document.getElementById("timeout-modal");
const timeoutModalOverlay = document.getElementById("timeout-modal-overlay");
const timeoutModalTapToContinueOverlay = document.getElementById(
  "timeout-modal-tap-to-continue-overlay"
);
const timeoutCountdownText = document.getElementById("timeout-countdown-text");

const enTimeoutQuestion = document.getElementById("en-timeout-question");
const enTimeoutInstruction = document.getElementById("en-timeout-instruction");

const esTimeoutQuestion = document.getElementById("es-timeout-question");
const esTimeoutInstruction = document.getElementById("es-timeout-instruction");

// Main
const toggleLangButton = document.getElementById("toggle-lang-button");

const enHomeHeading = document.getElementById("en-home-heading");
const esHomeHeading = document.getElementById("es-home-heading");
const enHomeIntroText = document.getElementById("en-home-intro-text");
const esHomeIntroText = document.getElementById("es-home-intro-text");

export {
  // Timeout Modal
  timeoutModal,
  timeoutModalOverlay,
  timeoutModalTapToContinueOverlay,
  timeoutCountdownText,
  enTimeoutQuestion,
  enTimeoutInstruction,
  esTimeoutQuestion,
  esTimeoutInstruction,
  // Main
  toggleLangButton,
  enHomeHeading,
  esHomeHeading,
  enHomeIntroText,
  esHomeIntroText,
};
