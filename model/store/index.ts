/**
 * Store 데이터 모델
 * storeId : 스토어의 고유 ID
 * name : 스토어의 이름
 * managerId : 스토어 관리자 ID
 */
 
export interface Store {    
    storeId : number;
    name : string;
    managerId : string;
    waitng : StoreWaiting;
}
interface StoreWaiting 
 {
     start : string;
     end : string;
     isActive : boolean;
 }