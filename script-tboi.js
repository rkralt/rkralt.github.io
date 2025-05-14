import allItems from './TBOI/Data/item-data.js';
const zeroPad = (num, places) => String(num).padStart(places, '0')

const tboiItems = document.querySelector('.tboi-items');

allItems.forEach(item => {
  const itemNode = document.createElement("img");
  itemNode.classList.add("tboi-item");
  itemNode.dataset.itemId = item.id;

  const itemIdZeroes = zeroPad(item.id, 3)
  itemNode.src = `Images/TBOI/Items/${itemIdZeroes}.png`;

  itemNode.addEventListener('mouseover', () => {
    const name = allItems.find(x => x.id === parseInt(itemNode.dataset.itemId)).name;
    const nameContainer = document.querySelector('.tboi-item-name');
    nameContainer.textContent = name;

    const summary = allItems.find(x => x.id === parseInt(itemNode.dataset.itemId)).summary;
    const summaryContainer = document.querySelector('.tboi-item-summary');
    summaryContainer.textContent = summary;

    const quality = allItems.find(x => x.id === parseInt(itemNode.dataset.itemId)).quality;
    const qualityContainer = document.querySelector('.tboi-item-quality');
    qualityContainer.src = `Images/TBOI/Qualities/${quality}.png`;
    qualityContainer.classList.remove('hidden');

    const description = allItems.find(x => x.id === parseInt(itemNode.dataset.itemId)).description;
    const descriptionContainer = document.querySelector('.tboi-item-description');
    descriptionContainer.textContent = description;
    descriptionContainer.style.height = "auto"; // Reset height
    descriptionContainer.style.height = descriptionContainer.scrollHeight + "px"; // Set height to scrollHeight
  })

  itemNode.addEventListener('mouseout', () => {
    const nameContainer = document.querySelector('.tboi-item-name');
    nameContainer.textContent = '';

    const summaryContainer = document.querySelector('.tboi-item-summary');
    summaryContainer.textContent = '';

    const descriptionContainer = document.querySelector('.tboi-item-description');
    descriptionContainer.textContent = '';

    const qualityContainer = document.querySelector('.tboi-item-quality');
    qualityContainer.src = '';
    qualityContainer.classList.add('hidden');
  })

  tboiItems.appendChild(itemNode);
})