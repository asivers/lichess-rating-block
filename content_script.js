const targetNode = document

const config = { attributes: true, childList: true, subtree: true }

const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const tagRemover = tagName => {
            let eltToRemoveList = document.getElementsByTagName(tagName)
            const eltToRemoveListLength = eltToRemoveList.length
            for (let i = 0; i < eltToRemoveListLength; i += 1) {
              eltToRemoveList[0].parentElement.removeChild(eltToRemoveList[0])
              eltToRemoveList = document.getElementsByTagName(tagName)
            }
          }
          tagRemover('RATING')
          tagRemover('GOOD')
          tagRemover('BAD')
        }
        else if (mutation.type === 'attributes') {
          const classRemover = className => {
            let eltToRemoveList = document.getElementsByClassName(className)
            const eltToRemoveListLength = eltToRemoveList.length
            for (let i = 0; i < eltToRemoveListLength; i += 1) {
              eltToRemoveList[0].parentElement.removeChild(eltToRemoveList[0])
              eltToRemoveList = document.getElementsByClassName(className)
            }
          }
          classRemover('rating')
          classRemover('utitle')
          classRemover('crosstable')
          classRemover('user-link ulpt')
        }
    }
}

const observer = new MutationObserver(callback)

observer.observe(targetNode, config)
