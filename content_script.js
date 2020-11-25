const targetNode = document

const config = { attributes: true, childList: true, subtree: true }

const multipleRemover = (namesList, type) => {
  const eltRemover = (eltName, type) => {
    const getEltsToRemoveList = (eltName, type) => {
      switch (type) {
        case 'TAG':
          return document.getElementsByTagName(eltName)
        case 'CLASS':
          return document.getElementsByClassName(eltName)
        default:
          return []
      }
    }
    const eltToRemoveList = getEltsToRemoveList(eltName, type)
    if (eltToRemoveList.length > 0) {
      eltToRemoveList[0].parentElement.removeChild(eltToRemoveList[0])
    }
  }
  namesList.forEach(eltName => eltRemover(eltName, type))
}

const callback = mutationsList => {
  mutationsList.forEach(() => {
    multipleRemover(['rating', 'good', 'bad', 'strong', 'green', 'red'], 'TAG')
    multipleRemover(['rating', 'utitle', 'crosstable', 'user-link ulpt', 'sub-ratings', 'versus'], 'CLASS')
  })
}

const observer = new MutationObserver(callback)

observer.observe(targetNode, config)
