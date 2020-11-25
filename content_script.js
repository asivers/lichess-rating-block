const targetNode = document

const config = { attributes: true, childList: true, subtree: true }

const multipleRemover = (type, namesList) => {
  const eltRemover = (type, eltName) => {
    const getEltsToRemoveList = (type, eltName) => {
      switch (type) {
        case 'TAG':
          return document.getElementsByTagName(eltName)
        case 'CLASS':
          return document.getElementsByClassName(eltName)
        default:
          return []
      }
    }
    const eltToRemoveList = getEltsToRemoveList(type, eltName)
    if (eltToRemoveList.length > 0) {
      eltToRemoveList[0].parentElement.removeChild(eltToRemoveList[0])
    }
  }
  namesList.forEach(eltName => eltRemover(type, eltName))
}

const callback = mutationsList => {
  mutationsList.forEach(() => {
    multipleRemover(
      'TAG', ['rating', 'good', 'bad', 'strong', 'green', 'red']
      )
    multipleRemover(
      'CLASS', ['rating', 'utitle', 'crosstable', 'user-link ulpt', 'sub-ratings', 'versus', 'highcharts-series-group']
      )
  })
}

const observer = new MutationObserver(callback)

observer.observe(targetNode, config)
