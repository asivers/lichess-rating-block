const targetNode = document

const config = { attributes: true, childList: true, subtree: true }

const tagRemoverMultiple = tagList => {
  const tagRemover = tagName => {
    let eltToRemoveList = document.getElementsByTagName(tagName)
    if (eltToRemoveList.length > 0) {
      eltToRemoveList[0].parentElement.removeChild(eltToRemoveList[0])
      tagRemover(tagName)
    }
  }
  tagList.forEach(tagName => tagRemover(tagName))
}

const classRemoverMultiple = classList => {
  const classRemover = className => {
    let eltToRemoveList = document.getElementsByClassName(className)
    if (eltToRemoveList.length > 0) {
      eltToRemoveList[0].parentElement.removeChild(eltToRemoveList[0])
      classRemover(className)
    }
  }
  classList.forEach(className => classRemover(className))
}

const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          tagRemoverMultiple(['rating', 'good', 'bad', 'strong', 'green', 'red'])
        }
        else if (mutation.type === 'attributes') {
          classRemoverMultiple(['rating', 'utitle', 'crosstable', 'user-link ulpt', 'sub-ratings'])
        }
    }
}

const observer = new MutationObserver(callback)

observer.observe(targetNode, config)
