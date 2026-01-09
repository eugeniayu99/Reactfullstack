/*
    쇼핑몰 상품의 상세정보(interface와 union 타입 활용하기)
    쇼핑몰에서 판매하는 상품의 상세 정보를 나타내는 타입에 정의해야 한다.
    
    1. Product 인터페이스 정의하기
        - 모든 상품이 가지는 공통 속성을 정의한다.
        - id : 숫자
        - name : 문자열
        - price : 숫자
    2. DeliveryMethod 유니온 타입을 정의
        - 배송 방법은  '택배', '방문수령', '새벽배송' 중 하나만 가능하다.

    3. ProductDetail 인터페이스 정의
        - Product 인터페이스를 extends한다.
        - description : 문자열
        - delivery : 위에서 정의한 DeilveryMethod 타입
        - stock : 숫자
    
    타입을 정의한후 myProduct 제품 한개를 정의한다.
    id : 101
*/

interface Product {
    id : number;
    name : string;
    price : number;
}

// 문자열 유니온 타입을 사용해 오타와 잘못된 값 입력을 원천 차단
type DeliveryMethod = "택배" | "방문수령" | "새벽배송";

interface ProductDetail extends Product{
    description : string;
    delivery : DeliveryMethod;
    stock : number;
}

const myProduct: ProductDetail = {
    id : 101,
    name : "무선키보드",
    price : 59000,
    description : "저소음 기계식 무선 키보드",
    delivery : "택배",
    stock : 25,
}