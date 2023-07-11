class CopyEvent {
  setCopyFeatures(elementsClassName: string): void {
    navigator.clipboard.writeText(document.querySelector(`.${elementsClassName}`).textContent);
  }
}

export default new CopyEvent();
