export default interface OrderState {
  list: {
    orders: any[],
    orderCount: number,
    itemCount: number
  },
  poIds: any,
  query: any,
  current: any,
  validStatusChange: any
}