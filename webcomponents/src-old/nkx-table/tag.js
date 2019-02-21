class NkxTable extends HTMLElement {
  constructor () {
    super()


  }

  static get observedAttributes () {
    return ['max-length', 'sort-key', 'sort-order']
  }

  get headers () {
    return this._headers
  }

  get rows () {
    return this._rows
  }

  connectedCallback () {
    this._table = document.createElement('table')
    this._thead = document.createElement('thead')
    this._tbody = document.createElement('tbody')

    this._table.appendChild(this._thead)
    this._table.appendChild(this._tbody)
    this.appendChild(this._table)
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    switch (attr.toLowerCase()) {
      case 'max-length':
        console.log("Max Length: " + newValue);
        break

      default: return

    }
  }

  _addHeader (tr, label) {
    let th = document.createElement('th')

    th.insertAdjacentHTML('beforeend', label)
    tr.appendChild(th)
  }

  _addRow (data) {
    let tr = document.createElement('tr')

    this._headers.forEach((label) => {
      let td = document.createElement('td')

      td.innerHTML = data[label]
      tr.appendChild(td)
    })

    this._tbody.appendChild(tr)
  }

  render (data) {
    this._headers = data.headers
    this._rows = data.rows

    if (data.hasOwnProperty('headers')) {
      let tr = document.createElement('tr')

      this._headers.forEach((label) => this._addHeader(tr, label))
      this._thead.appendChild(tr)
    }

    this._rows.forEach((row) => this._addRow(row))
  }
}

customElements.define('nkx-table', NkxTable)
