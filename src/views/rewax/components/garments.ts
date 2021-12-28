// @ts-nocheck
m('.header__address', [
  m('.row.jc-between.py-5', [
    m('.col-auto', [
      m('.d-block.pb-3', `${this.url.first_name} ${this.url.last_name}`),
      m('.d-block', `${this.url.street_address}`),
      m('.d-block', `${this.url.city}, ${this.url.zip}`),
      m('.d-block', `${this.url.country}`)
    ])
  ])
]),
m('.garment__head.text-uppercase', [
  m('.row.ac-center.jc-center.py-2', [
    m('.col-5.pl-5', 'Service:'),
    m('.col-2', 'Price:'),
    m('.col-2.text-center', 'Order:'),
    m('.col-3.text-center', 'Status:')
  ])
]),

m('.garment__items', [
  m.div('row', 'jc-between', 'py-3')([
    m('.col-5.pl-5.text-uppercase', `${this.url.garment}`),
    m('.col-2', `${this.url.service_price}`),
    m('.col-2.text-center', `#${this.url.order_number}`),
    m('.col-3.text-center', [
      m('span.garment__status', 'Order Paid')
    ])
  ])
])
;
