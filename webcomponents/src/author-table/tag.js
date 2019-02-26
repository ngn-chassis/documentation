class AuthorDataTableElement extends AuthorElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.UTIL.definePrivateProperties({
      headers: null,
      rows: null,
      table: null,
      thead: null,
      tbody: null,

      addHeader: (tr, label) => {
        let th = document.createElement('th')
        th.insertAdjacentHTML('beforeend', label)
        tr.appendChild(th)
      },

      addRow: data => {
        let tr = document.createElement('tr')

        this.PRIVATE.headers.forEach((label) => {
          let td = document.createElement('td')

          td.innerHTML = data[label]
          tr.appendChild(td)
        })

        this.PRIVATE.tbody.appendChild(tr)
      }
    })

    this.registerListeners(this, [
      {
        name: 'attribute.change',
        callback: evt => {
          let { attribute, newValue } = evt.detail

          switch (attribute.toLowerCase()) {
            case 'max-length':
              console.log("Max Length: " + newValue);
              break
          }
        }
      },

      {
        name: 'connected',
        callback: () => {
          this.PRIVATE.table = document.createElement('table')
          this.PRIVATE.thead = document.createElement('thead')
          this.PRIVATE.tbody = document.createElement('tbody')

          this.PRIVATE.table.appendChild(this.PRIVATE.thead)
          this.PRIVATE.table.appendChild(this.PRIVATE.tbody)
          this.appendChild(this.PRIVATE.table)
        }
      }
    ])
  }

  static get observedAttributes () {
    return ['max-length', 'sort-key', 'sort-order']
  }

  get headers () {
    return this.PRIVATE.headers
  }

  get rows () {
    return this.PRIVATE.rows
  }

  render (data) {
    this.PRIVATE.headers = data.headers
    this.PRIVATE.rows = data.rows

    if (data.hasOwnProperty('headers')) {
      let tr = document.createElement('tr')

      this.PRIVATE.headers.forEach((label) => this.PRIVATE.addHeader(tr, label))
      this.PRIVATE.thead.appendChild(tr)
    }

    this.PRIVATE.rows.forEach((row) => this.PRIVATE.addRow(row))
  }
}

customElements.define('author-table', AuthorDataTableElement)
