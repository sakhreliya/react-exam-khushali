import { all } from "redux-saga/effects";
import { DeleteProductSagaRoot, GetProductSagaRoot } from "./root/rootProduct";
export function* RootSaga (){
  yield all([GetProductSagaRoot(),DeleteProductSagaRoot()])
}