create sequence seq_company_id
    increment by 1 
    start with 1
    maxvalue 999
    nocache
    nocycle;

create sequence seq_guest_id
    increment by 1 
    start with 1
    maxvalue 99999
    nocache
    nocycle;

create sequence seq_booking_order_id
    increment by 1 
    start with 1
    maxvalue 999999
    nocache
    nocycle;
    
    drop sequence seq_booking_order_id;
    

create sequence seq_building_room_id
    increment by 1 
    start with 1
    maxvalue 999999
    nocache
    nocycle;

create sequence seq_ordering_service_id
    increment by 1 
    start with 1
    maxvalue 999999
    nocache
    nocycle;

create sequence seq_booking_room_id
    increment by 1 
    start with 1
    maxvalue 999999
    nocache
    nocycle;

create sequence seq_complaints_suggestions_id
    increment by 1 
    start with 1
    maxvalue 999999
    nocache
    nocycle;
    
-- ----------------------------

create table hotel_class (
    id                          number(7)
    constraint hotel_class_id_pk primary key,
    class_requirements          varchar2(255) not null
);

insert into hotel_class (id, class_requirements)
values (1, '������ �������: �� ����� 2� �� ����; ������: 1 �� 5 ������;
		����� ����������� �����: 1��� � 5 ����; ����� ���������: 1��� � 3 ���;
		������: ����������');

insert into hotel_class (id, class_requirements)
values (2, '�������: � ������; ������ �������: �� ����� 2� �� ����; ������: 1 �� 5 ������;
		����� ����������� �����: 1��� � 3 ���; ����� ���������: 1��� � 3 ���;
		������: ����������'); 

insert into hotel_class (id, class_requirements)
values (3, '���������: � ������; �����������: � ������; �������: � ������; 
		������ �������: � �������; ������: � ������; 
		����� ����������� �����: 1��� � 3 ���; ����� ���������: ����������; 
		������: ����������');

insert into hotel_class (id, class_requirements)
values (4, '���������: � ������; �����������: � ������; �������: � ������; 
		������ �������: � �������; ������: � ������; 
		����� ����������� �����: ����������; ����� ���������: ����������; 
		������: ����������; ���: � ������; ������� � ����: � ������');

insert into hotel_class (id, class_requirements)
values (5, '���������: � ������; �����������: � ������; �������: � ������; 
		������ �������: � �������; ������: � ������; 
		����� ����������� �����: ����������; ����� ���������: ����������; 
		������: ����������; ���: � ������; ������� � ����: � ������');
        
select *
from hotel_class;

-- ---------------------------------------------------

create table price_room (
    id                          number(7)
    constraint price_room_id_pk primary key,
    hotel_class_id              number(7) not null,
    foreign key(hotel_class_id) references hotel_class(id), 
    number_beds                 number(7) not null,
    price                       number(7) not null
);

insert into price_room (id, hotel_class_id, number_beds, price)
values (1, 1, 1, 750);

insert into price_room (id, hotel_class_id, number_beds, price)
values (2, 1, 2, 1050);

insert into price_room (id, hotel_class_id, number_beds, price)
values (3, 1, 3, 1350);

insert into price_room (id, hotel_class_id, number_beds, price)
values (4, 2, 1, 1250);

insert into price_room (id, hotel_class_id, number_beds, price)
values (5, 2, 2, 1550);

insert into price_room (id, hotel_class_id, number_beds, price)
values (6, 2, 3, 1850);

insert into price_room (id, hotel_class_id, number_beds, price)
values (7, 3, 1, 1750);

insert into price_room (id, hotel_class_id, number_beds, price)
values (8, 3, 2, 2050);

insert into price_room (id, hotel_class_id, number_beds, price)
values (9, 3, 3, 2350);

insert into price_room (id, hotel_class_id, number_beds, price)
values (10, 4, 1, 2250);

insert into price_room (id, hotel_class_id, number_beds, price)
values (11, 4, 2, 2550);

insert into price_room (id, hotel_class_id, number_beds, price)
values (12, 4, 3, 2850);

insert into price_room (id, hotel_class_id, number_beds, price)
values (13, 5, 1, 2750);

insert into price_room (id, hotel_class_id, number_beds, price)
values (14, 5, 2, 3050);

insert into price_room (id, hotel_class_id, number_beds, price)
values (15, 5, 3, 3350);

-- -------------------------------------------------------

create table building(
    id                          number(7)
    constraint building_id_pk primary key,
    hotel_class_id              number(7) not null,
    foreign key(hotel_class_id) references hotel_class(id),
    number_floors               number(7) not null,
    total_number_rooms          number(7) not null,
    number_rooms_floor          number(7) not null,
    number_beds_in_rooms        number(7) not null,
    address_hotel                     varchar2(255) not null
 );
 
insert into building (id, hotel_class_id, number_floors, total_number_rooms, 
                        number_rooms_floor, number_beds_in_rooms, address_hotel)
values (1, 2, 3, 9, 
        3, 1, '������������ �������� 1�'); -- �� ���� 3 �������
        
insert into building (id, hotel_class_id, number_floors, total_number_rooms, 
                        number_rooms_floor, number_beds_in_rooms, address_hotel)
values (2, 3, 3, 9, 
        3, 2, '����� ��������� �������� 3�'); -- �� ���� 6 �������

insert into building (id, hotel_class_id, number_floors, total_number_rooms, 
                        number_rooms_floor, number_beds_in_rooms, address_hotel)
values (3, 4, 3, 9, 
        3, 3, '����� ������������� ���� ������'); -- �� ���� 9 �������

select * 
from building
where total_number_rooms != number_floors * number_rooms_floor;

-- -------------------------------------------------------

create table building_room (
    id                          number(7)
    constraint number_building_id_pk primary key,
    room_number                 number(7) not null,
    building_id                 number(7) not null,
    foreign key(building_id) references building(id)
);

--� 1 ������� all-9 3fl 2-1, 1-2, 0-3
--�� 2 ������� all-9 3fl 1-1, 2-2, 0-3
--� 3 ������� all-9 3fl 1-1, 1-2, 1-3

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 201, 1);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 202, 1);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 203, 1);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 301, 1);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 302, 1);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 303, 1);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 401, 1);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 402, 1);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 403, 1);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 201, 2);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 202, 2);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 203, 2);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 301, 2);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 302, 2);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 303, 2);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 401, 2);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 402, 2);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 403, 2);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 201, 3);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 202, 3);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 203, 3);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 301, 3);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 302, 3);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 303, 3);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 401, 3);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 402, 3);

insert into building_room (id, room_number, building_id)
values (seq_building_room_id.nextval, 403, 3);

select * from building_room;

-- -------------------------------------------------

create table list_services (
    id                          number(7)
    constraint list_services_id_pk primary key,
    name_services               varchar2(255) not null, 
    price                       number(7) not null
);


insert into list_services (id, name_services, price)
values (1, '���������� ������', 0);

insert into list_services (id, name_services, price)
values (2, '���������', 200);

insert into list_services (id, name_services, price)
values (3, '���������', 300);

insert into list_services (id, name_services, price)
values (4, '�������', 700);

insert into list_services (id, name_services, price)
values (5, '�����', 500);

insert into list_services (id, name_services, price)
values (6, '�������', 500);

insert into list_services (id, name_services, price)
values (7, '��������', 400);

insert into list_services (id, name_services, price)
values (8, '���', 450);

select * from list_services ;

-- ------------------------------------------

create table building_service (
    id                          number(7)
    constraint building_services_id_pk primary key,
    services_id                 number(7) not null,
    foreign key(services_id) references list_services(id), 
    building_id                 number(7) not null,
    foreign key(building_id) references building(id),
    description                 varchar2(255)
);

insert into building_service (id, services_id, building_id, description)
values (1, 1, 1, '������ ������� ���������� ������ ���� � 11.00-12.00');

insert into building_service (id, services_id, building_id, description)
values (2, 1, 2, '������ ������� ���������� ������ ���� � 10.00-12.00');

insert into building_service (id, services_id, building_id, description)
values (3, 1, 3, '������ ������� ���������� ������ ���� � 10.00-12.00');

insert into building_service (id, services_id, building_id, description)
values (4, 2, 2, '��������� �������� � 9.00-11.00 � � 15.00-16.00. -1 ���� - ���� �� �����');

insert into building_service (id, services_id, building_id, description)
values (5, 2, 3, '��������� �������� � 9.00-11.00 � � 15.00-17.00. -1 ����');

insert into building_service (id, services_id, building_id, description)
values (6, 3, 2, '��������� �������� � 9.00-11.00 � � 15.00-16.00. -1 ���� - ���� �� �����');

insert into building_service (id, services_id, building_id, description)
values (7, 3, 3, '��������� �������� � 9.00-11.00 � � 15.00-17.00. -1 ����');

insert into building_service (id, services_id, building_id, description)
values (8, 4, 3, '������� �������� � 9.00-11.00. ���������� �� ����� �������');

insert into building_service (id, services_id, building_id, description)
values (9, 5, 3, '����� �������� 16.00-23.00. ����������� �� ����� �������');

insert into building_service (id, services_id, building_id, description)
values (10, 6, 3, '������� �������� � 9.00-00.00 -1 ���� ');

insert into building_service (id, services_id, building_id, description)
values (11, 7, 2, '�������� �������� � 10.00-15.00 � � 16.00-20.00');

insert into building_service (id, services_id, building_id, description)
values (12, 7, 3, '�������� �������� � 10.00-15.00, � � 16.00-20.00');

insert into building_service (id, services_id, building_id, description)
values (13, 8, 1, '��� �������� � 18.00-20.00');

insert into building_service (id, services_id, building_id, description)
values (14, 8, 2, '��� �������� � 18.00-20.00');

insert into building_service (id, services_id, building_id, description)
values (15, 8, 3, '��� �������� � 18.00-20.00');

select * from building_service;
-- ------------------------------------------------

create table company (
    id                          number(7)
    constraint company_id_pk primary key,
    name_company                varchar2(255) not null,
    fname_contact_person        varchar2(255) not null,
    contract_status             number(8) not null,
    discription_activity        varchar2(255) not null,
    sale                        number(7) null
);

insert into company (id, name_company, fname_contact_person, contract_status, discription_activity, sale)
values (seq_company_id.nextval, '���������', '�������� ��������', 1, '�������� ������������� ����������', 5);

insert into company (id, name_company, fname_contact_person, contract_status, discription_activity, sale)
values (seq_company_id.nextval, '������-�������', '��������', 0, '���������� ����������', 10);

insert into company (id, name_company, fname_contact_person, contract_status, discription_activity, sale)
values (seq_company_id.nextval, '������', '��������', 1, '������������� �����', 10);

select * from company;

-- --------------------------------------------

create table guest(
    id                          number(7)
    constraint guest_id_pk primary key,
    last_name                   varchar2(255) not null,
    first_name                  varchar2(255) not null,
    date_birth                  date not null,
    gender                      varchar2(255) not null,
    contacts                    varchar2(255) not null,
    amount_debt                 number(7) null
);

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '���������', '���������',to_date('28-07-1996','dd-mm-yyyy') ,'�', '89546742345');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '����', '����',to_date('29-04-1998', 'dd-mm-yyyy') ,'�', '89164130202');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '������������', '����',to_date('14-08-1985', 'dd-mm-yyyy') ,'�', '84953241897');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '����', '���������',to_date('26-11-1986', 'dd-mm-yyyy') ,'�', '89546026745');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '��������', '�������',to_date('25-02-1964', 'dd-mm-yyyy'),'�', '89832201890');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '������', '��������',to_date('27-12-1976', 'dd-mm-yyyy') ,'�', '84956669860');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '��������', '�������',to_date('31-08-1979', 'dd-mm-yyyy') ,'�', '895467426709');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '������', '����������',to_date('10-07-1987', 'dd-mm-yyyy') ,'�', '84957766610');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '�������', '�������',to_date('15-07-1997', 'dd-mm-yyyy'),'�', '89546746745');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '�������', '�����',to_date('22-07-1974', 'dd-mm-yyyy') ,'�', '89657843254');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '��������', '����',to_date('28-10-1983', 'dd-mm-yyyy') ,'�', '84956784321');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '�����������', '�������', to_date('10-04-1976', 'dd-mm-yyyy') ,'�', '84622636095');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '�����', '�����',to_date('04-07-1965', 'dd-mm-yyyy') ,'�', '85222043399');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '������', '�������',to_date('21-03-1988', 'dd-mm-yyyy') ,'�', '83513477192');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '�����', '�������',to_date('18-09-1988', 'dd-mm-yyyy') ,'�', '83697350981');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '���������', '������',to_date('15-09-1988', 'dd-mm-yyyy') ,'�', '84084684617');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '������', '������',to_date('31-01-1960', 'dd-mm-yyyy') ,'�', '81259079106');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '����', '������',to_date('19-10-1982', 'dd-mm-yyyy') ,'�', '84025378515');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '��������', '�����',to_date('08-04-1968', 'dd-mm-yyyy') ,'�', '8095819428');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '���������', '����',to_date('19-07-1960', 'dd-mm-yyyy') ,'�', '8253204211');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, '�������', '������',to_date('04-11-1966', 'dd-mm-yyyy') ,'�', '8343965091');


update guest
set amount_debt = 0
where amount_debt is null;

select * from guest;

-- ---------------------------------------------------

create table booking_order(
    id                          number(7)
    constraint booking_order_id_pk primary key,
    guest_id                    number(7),
    foreign key(guest_id) references guest(id),
    company_id                  number(7),
    foreign key(company_id) references company(id),
    hotel_class_stars           number(7) not null,
    booking_date                date not null,
    arrival_date                date not null,
    departure_date              date not null,
    number_people               number(7) not null, 
    number_rooms         		number(7),
    order_processing_status     varchar(255) null,
    building_id                 number(7) null,
    foreign key(building_id) references building(id),
    payment_status              varchar(255) null
);

delete booking_order;

--	 ������ 3 ������ �� 9 � 3� ��������� ������� � 2� �������� ��������
insert into booking_order(id, company_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms, 
                            order_processing_status, building_id) 
values (seq_booking_order_id.nextval, (select id from company where lower(name_company) like '������'), 3,
        to_date('31-05-2023', 'dd-mm-yyyy'), to_date('27-06-2023', 'dd-mm-yyyy'),  
        to_date('30-06-2023', 'dd-mm-yyyy'), 6, 3, '������', 2);
        
insert into booking_order(id, company_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms, 
                            order_processing_status, building_id) 
values (seq_booking_order_id.nextval, (select id from company where lower(name_company) like '������'), 2,
        to_date('10-06-2023', 'dd-mm-yyyy'), to_date('16-06-2023', 'dd-mm-yyyy'),  
        to_date('03-07-2023', 'dd-mm-yyyy'), 4, 4, '������', 1);
        
insert into booking_order(id, company_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms, 
                            order_processing_status, building_id) 
values (seq_booking_order_id.nextval, (select id from company where lower(name_company) like '���������'), 2,
        to_date('10-06-2023', 'dd-mm-yyyy'), to_date('16-06-2023', 'dd-mm-yyyy'),  
        to_date('03-07-2023', 'dd-mm-yyyy'), 5, 5, '������', 1);
        
insert into booking_order(id, company_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms, 
                            order_processing_status, building_id) 
values (seq_booking_order_id.nextval, (select id from company where lower(name_company) like '���������'), 4,
        to_date('31-05-2023', 'dd-mm-yyyy'), to_date('25-06-2023', 'dd-mm-yyyy'),  
        to_date('27-06-2023', 'dd-mm-yyyy'), 5, 2, '������', 3);
        
insert into booking_order(id, guest_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms) 
values (seq_booking_order_id.nextval, (select id from guest where lower(last_name) like '�������'), 3,
        to_date('27-05-2023', 'dd-mm-yyyy'), to_date('23-06-2023', 'dd-mm-yyyy'),  
        to_date('02-07-2023', 'dd-mm-yyyy'), 1, 1);
        
    
        
select *
from booking_order;
-- ----------------------------

-- min �� ������������
create or replace view current_b_ord_id (id)
as select MIN(id) 
    from booking_order 
    where order_processing_status is null;

select * from current_b_ord_id;

-- ������� �������� �� ���������
--select *
--from booking_order bo join current_b_ord_id cbo on bo.id = cbo.id
--join building b on bo.hotel_class_stars = b.hotel_class_id;

-- � �� ����������� ������������� ������ ceil(number_people / number_rooms) ��� ���������� �����
create or replace view processing_filter_limits 
as select  bo.id ord_id, bo.guest_id, bo.company_id,
	b.id proposed_building_id, b.hotel_class_id, bo.arrival_date, bo.departure_date,
    b.total_number_rooms, b.number_beds_in_rooms, 
	bo.number_people, bo.number_rooms
    from booking_order bo join current_b_ord_id cbo on bo.id = cbo.id
    join building b on bo.hotel_class_stars = b.hotel_class_id
    and b.number_beds_in_rooms >= ceil(bo.number_rooms/bo.number_people);

select *
from processing_filter_limits;

-- ���-�� ��������� ������� �� ��������� ���� 
-- ��� ������ ������� ������ �� ���� ������ � ������� �� ������ ���-�� ������� � 

create or replace view free_rooms_order_dates
as select b.id building_id, b.hotel_class_id, b.total_number_rooms, b.number_beds_in_rooms, 
        nvl(b_num_booked_rooms.num_booked_rooms, 0) num_booked_rooms,
        b.total_number_rooms - nvl(b_num_booked_rooms.num_booked_rooms, 0) num_free_rooms
    from building b left join (
    --������� ���-�� ������,������� ������ �� ��� ����� ��� ������� ������������� ������� 
        select bpo.building_id, nvl(sum(bpo.number_rooms), 0) num_booked_rooms,
                bo.arrival_date, bo.departure_date
        from booking_order bpo cross join booking_order bo
            join current_b_ord_id cbo on bo.id = cbo.id 
        where lower(bpo.order_processing_status) like '������'
        and not (
            bo.arrival_date >= bpo.departure_date -- ���� ������� � ������� ����� ���������
            or bo.departure_date <= bpo.arrival_date 
        )
        group by bpo.building_id,  bo.arrival_date, bo.departure_date
) b_num_booked_rooms on b_num_booked_rooms.building_id = b.id
order by building_id;

select * 
from free_rooms_order_dates;

create or replace view building_view_for_id 
as select b_ord_limits.ord_id, b_ord_limits.guest_id, b_ord_limits.company_id,
        b_ord_limits.proposed_building_id, b_ord_limits.hotel_class_id, b_ord_limits.arrival_date, b_ord_limits.departure_date,
        b_ord_limits.total_number_rooms, b_ord_limits.number_beds_in_rooms, 
        b_ord_limits.number_people, b_ord_limits.number_rooms,
        b_ord_limits.total_number_rooms - nvl(b_num_booked_rooms.num_booked_rooms, 0) num_free_rooms
    from processing_filter_limits b_ord_limits join free_rooms_order_dates b_num_booked_rooms 
                                                on b_num_booked_rooms.building_id = b_ord_limits.proposed_building_id
    where b_ord_limits.total_number_rooms - nvl(b_num_booked_rooms.num_booked_rooms, 0) >= b_ord_limits.number_rooms 
    order by b_ord_limits.number_beds_in_rooms ASC ;

select * 
from building_view_for_id;

select bo.id, case
		when bopv.proposed_building_id is not Null and 
	(bo.guest_id in (select id from guest) or bo.company_id in 
                    (select id 
                    from company 
                    where contract_status = 1))
    then '������'
    else '��������'
    end status, 
case 
    when bopv.proposed_building_id is not null and 
	(bo.guest_id in (select id from guest) or bo.company_id in 
                    (select id 
                    from company 
                    where contract_status = 1))
	then bopv.proposed_building_id
    else null
    end proposed_building_id
from  booking_order bo 
	left join building_view_for_id bopv on bo.id = bopv.ord_id
    join current_b_ord_id cbo on bo.id = cbo.id;


--update booking_order bo 
--SET bo.order_processing_status = case
--		when bopv.proposed_building_id is not null and 
--	(bo.guest_id in (select id from guest) or bo.company_id in 
--                    (select id 
--                    from company 
--                    where contract_status = 1))
--    then '������'
--    else '��������'
--    end,
--bo.building_id = case 
--    when bopv.proposed_building_id is not null and 
--	(bo.guest_id in (select id from guest) or bo.company_id in 
--                    (select id from company where contract_status = 1))
--	then bopv.proposed_building_id
--    else null
--    END
--FROM booking_order bo 
--LEFT JOIN booking_order_processing_building_view_for_id bopv ON bo.id = bopv.ord_id
--WHERE bo.id = (SELECT * FROM current_b_ord_id_to_process_building);
UPDATE booking_order bo 
SET 
    bo.order_processing_status = 
        CASE 
            WHEN bopv.proposed_building_id IS NOT NULL AND 
                (bo.guest_id IN (SELECT id FROM guest) OR bo.company_id IN (SELECT id FROM company WHERE contract_status = 1)) 
            THEN '������'
            ELSE '��������'
        END, 
    bo.building_id = 
        CASE 
            WHEN bopv.proposed_building_id IS NOT NULL AND 
                (bo.guest_id IN (SELECT id FROM guest) OR bo.company_id IN (SELECT id FROM company WHERE contract_status = 1)) 
            THEN bopv.proposed_building_id
            ELSE NULL
        END
FROM booking_order bo 
LEFT JOIN booking_order_processing_building_view_for_id bopv ON bo.id = bopv.ord_id
WHERE bo.id = (SELECT * FROM current_b_ord_id_to_process_building);


    select * 
from booking_order;

--from booking_order bo LEFT JOIN building_view_for_id as bopv ON bo.id = bopv.ord_id
--	left join building_view_for_id bopv on bo.id = bopv.ord_id
--    join current_b_ord_id cbo on bo.id = cbo.id;