
insert into hotel_class (id, class_requirements)
values (1, 'Ванная комната: не менее 2х на этаж; Туалет: 1 на 5 комнат;
            Смена постельного белья: 1раз в 5 дней; Смена полотенец: 1раз в 3 дня;
            Уборка: ежедненвно');

insert into hotel_class (id, class_requirements)
values (2, 'Телефон: в номере; Ванная комната: не менее 2х на этаж; Туалет: 1 на 5 комнат;
            Смена постельного белья: 1раз в 3 дня; Смена полотенец: 1раз в 3 дня;
            Уборка: ежедненвно');

insert into hotel_class (id, class_requirements)
values (3, 'Холодильник: в номере; Телефон: в номере; 
            Ванная комната: в комнате; Туалет: в номере; 
            Смена постельного белья: 1раз в 3 дня; Смена полотенец: ежедненвно; 
            Уборка: ежедненвно');

insert into hotel_class (id, class_requirements)
values (4, 'Телефон: в номере; 
            Ванная комната: в комнате; Туалет: в номере; 
            Смена постельного белья: ежедненвно; Смена полотенец: ежедненвно; 
            Уборка: ежедненвно; Фен: в номере; Шампунь и мыло: в номере');


insert into hotel_class (id, class_requirements)
values (5, 'Телефон: в номере; 
            Ванная комната: в комнате; Туалет: в номере; 
            Смена постельного белья: ежедненвно; Смена полотенец: ежедненвно; 
            Уборка: ежедненвно; Фен: в номере; Шампунь и мыло: в номере');

-- -----------------------------------------

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

-- ----------------------------------------------

insert into building (id, hotel_class_id, number_floors, total_number_rooms, 
                        number_rooms_floor, number_beds_in_rooms, address_hotel)
values (1, 2, 3, 9, 
        3, 1, 'ВанПисовский переулок 1а'); -- на этаж 3 человек
        
insert into building (id, hotel_class_id, number_floors, total_number_rooms, 
                        number_rooms_floor, number_beds_in_rooms, address_hotel)
values (2, 3, 3, 9, 
        3, 2, 'улица Стального Алхимика 3б'); -- на этаж 6 человек

insert into building (id, hotel_class_id, number_floors, total_number_rooms, 
                        number_rooms_floor, number_beds_in_rooms, address_hotel)
values (3, 4, 3, 9, 
        3, 3, 'улица Великолепного Усуи Такуми'); -- на этаж 9 человек

-- --------------------------------------------------------
--номер в корпусе

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

-- ------------------------------------------------------------------
--список услуг
insert into list_services (id, name_services, price)
values (1, 'ежедневная уборка', 0);

insert into list_services (id, name_services, price)
values (2, 'прачечная', 200);

insert into list_services (id, name_services, price)
values (3, 'химчистка', 300);

insert into list_services (id, name_services, price)
values (4, 'бассейн', 700);

insert into list_services (id, name_services, price)
values (5, 'сауна', 500);

insert into list_services (id, name_services, price)
values (6, 'бильярд', 500);

insert into list_services (id, name_services, price)
values (7, 'ресторан', 400);

insert into list_services (id, name_services, price)
values (8, 'бар', 450);

-- ----------------------------------------------------------
--услуга корпус

insert into building_service (id, services_id, building_id, description)
values (1, 1, 1, 'Уборка номеров проводится каждый день с 11.00-12.00');

insert into building_service (id, services_id, building_id, description)
values (2, 1, 2, 'Уборка номеров проводится каждый день с 10.00-12.00');

insert into building_service (id, services_id, building_id, description)
values (3, 1, 3, 'Уборка номеров проводится каждый день с 10.00-12.00');

insert into building_service (id, services_id, building_id, description)
values (4, 2, 2, 'Прачечная работает с 9.00-11.00 и с 15.00-16.00. -1 этаж - вход со двора');

insert into building_service (id, services_id, building_id, description)
values (5, 2, 3, 'Прачечная работает с 9.00-11.00 и с 15.00-17.00. -1 этаж');

insert into building_service (id, services_id, building_id, description)
values (6, 3, 2, 'Химчистка работает с 9.00-11.00 и с 15.00-16.00. -1 этаж - вход со двора');

insert into building_service (id, services_id, building_id, description)
values (7, 3, 3, 'Химчистка работает с 9.00-11.00 и с 15.00-17.00. -1 этаж');

insert into building_service (id, services_id, building_id, description)
values (8, 4, 3, 'Бассейн работает с 9.00-11.00. Расположен на крыше корпуса');

insert into building_service (id, services_id, building_id, description)
values (9, 5, 3, 'Сауна работает 16.00-23.00. Расположена на крыше корпуса');

insert into building_service (id, services_id, building_id, description)
values (10, 6, 3, 'Бильярд работает с 9.00-00.00 -1 этаж ');

insert into building_service (id, services_id, building_id, description)
values (11, 7, 2, 'Ресторан работает с 10.00-15.00 и с 16.00-20.00');

insert into building_service (id, services_id, building_id, description)
values (12, 7, 3, 'Ресторан работает с 10.00-15.00, и с 16.00-20.00');

insert into building_service (id, services_id, building_id, description)
values (13, 8, 1, 'Бар работает с 18.00-20.00');

insert into building_service (id, services_id, building_id, description)
values (14, 8, 2, 'Бар работает с 18.00-20.00');

insert into building_service (id, services_id, building_id, description)
values (15, 8, 3, 'Бар работает с 18.00-20.00');

-- --------------------------------------------
--фирма
insert into company (id, name_company, fname_contact_person, contract_status, discription_activity, sale)
values (seq_company_id.nextval, 'Чебурашка', 'Крокодил Геннадий', 1, 'Проводят международные симпозиумы', 10);

insert into company (id, name_company, fname_contact_person, contract_status, discription_activity, sale)
values (seq_company_id.nextval, 'Крыска-Лариска', 'Шапокляк', 0, 'Проведение карнавалов', 2);

insert into company (id, name_company, fname_contact_person, contract_status, discription_activity, sale)
values (seq_company_id.nextval, 'Знайка', 'Незнайка', 1, 'Туристическая фирма', 5);

-- --------------------------------------------
-- постоялец

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Череватый', 'Владислав',to_date('28-07-1996','dd-mm-yyyy') ,'М', '89546742345');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Шепс', 'Олег',to_date('29-04-1998', 'dd-mm-yyyy') ,'М', '89164130202');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Джебисашвили', 'Лина',to_date('14-08-1985', 'dd-mm-yyyy') ,'Ж', '84953241897');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Шепс', 'Александр',to_date('26-11-1986', 'dd-mm-yyyy') ,'М', '89546026745');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Шевченко', 'Надежда',to_date('25-02-1964', 'dd-mm-yyyy'),'Ж', '89832201890');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Райдос', 'Виктория',to_date('27-12-1976', 'dd-mm-yyyy') ,'Ж', '84956669860');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Романова', 'Марьяна',to_date('31-08-1979', 'dd-mm-yyyy') ,'Ж', '895467426709');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Гецати', 'Константин',to_date('10-07-1987', 'dd-mm-yyyy') ,'М', '84957766610');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Матвеев', 'Дмитрий',to_date('15-07-1997', 'dd-mm-yyyy'),'М', '89546746745');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Башаров', 'Марат',to_date('22-07-1974', 'dd-mm-yyyy') ,'М', '89657843254');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Ларионов', 'Илья',to_date('28-10-1983', 'dd-mm-yyyy') ,'М', '84956784321');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Воротникова', 'Наталья', to_date('10-04-1976', 'dd-mm-yyyy') ,'Ж', '84622636095');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Хегай', 'Лилия',to_date('04-07-1965', 'dd-mm-yyyy') ,'Ж', '85222043399');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Гиберт', 'Виталий',to_date('21-03-1988', 'dd-mm-yyyy') ,'М', '83513477192');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Керро', 'Мэрилин',to_date('18-09-1988', 'dd-mm-yyyy') ,'Ж', '83697350981');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Кузнецова', 'Николь',to_date('15-09-1988', 'dd-mm-yyyy') ,'Ж', '84084684617');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Норузи', 'Мохсен',to_date('31-01-1960', 'dd-mm-yyyy') ,'М', '81259079106');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Ванг', 'Джулия',to_date('19-10-1982', 'dd-mm-yyyy') ,'Ж', '84025378515');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Голунова', 'Елена',to_date('08-04-1968', 'dd-mm-yyyy') ,'Ж', '8095819428');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Сотникова', 'Вера',to_date('19-07-1960', 'dd-mm-yyyy') ,'Ж', '8253204211');

insert into guest (id, last_name, first_name,date_birth, gender, contacts)
values (seq_guest_id.nextval, 'Пахомов', 'Сергей',to_date('04-11-1966', 'dd-mm-yyyy') ,'М', '8343965091');

update guest
set amount_debt = 0
where amount_debt is null;

-- -----------------------------------------------------
--заявка на заселение
insert into booking_order(id, company_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms, 
                            order_processing_status, building_id) 
values (seq_booking_order_id.nextval, (select id from company where lower(name_company) like 'знайка'), 3,
        to_date('31-05-2023', 'dd-mm-yyyy'), to_date('27-06-2023', 'dd-mm-yyyy'),  
        to_date('30-06-2023', 'dd-mm-yyyy'), 6, 3, 'принят', 2);
        
insert into booking_order(id, company_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms, 
                            order_processing_status, building_id) 
values (seq_booking_order_id.nextval, (select id from company where lower(name_company) like 'знайка'), 2,
        to_date('10-06-2023', 'dd-mm-yyyy'), to_date('16-06-2023', 'dd-mm-yyyy'),  
        to_date('03-07-2023', 'dd-mm-yyyy'), 4, 4, 'принят', 1);
        
insert into booking_order(id, company_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms, 
                            order_processing_status, building_id) 
values (seq_booking_order_id.nextval, (select id from company where lower(name_company) like 'чебурашка'), 2,
        to_date('10-06-2023', 'dd-mm-yyyy'), to_date('16-06-2023', 'dd-mm-yyyy'),  
        to_date('03-07-2023', 'dd-mm-yyyy'), 5, 5, 'принят', 1);
        
insert into booking_order(id, company_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms, 
                            order_processing_status, building_id) 
values (seq_booking_order_id.nextval, (select id from company where lower(name_company) like 'чебурашка'), 4,
        to_date('31-05-2023', 'dd-mm-yyyy'), to_date('25-06-2023', 'dd-mm-yyyy'),  
        to_date('27-06-2023', 'dd-mm-yyyy'), 5, 2, 'принят', 3);
        
insert into booking_order(id, guest_id, hotel_class_stars, booking_date, arrival_date, 
                            departure_date, number_people, number_rooms) 
values (seq_booking_order_id.nextval, (select id from guest where lower(last_name) like 'башаров'), 3,
        to_date('27-05-2023', 'dd-mm-yyyy'), to_date('23-06-2023', 'dd-mm-yyyy'),  
        to_date('02-07-2023', 'dd-mm-yyyy'), 1, 1);
        
select *
from booking_order;
-- ----------------------------

-- min не обработанный
create or replace view current_b_ord_id (id)
as select MIN(id) 
    from booking_order 
    where order_processing_status is null;

select * from current_b_ord_id;

-- отборка корпусов по звёздности
--select *
--from booking_order bo join current_b_ord_id cbo on bo.id = cbo.id
--join building b on bo.hotel_class_stars = b.hotel_class_id;

-- и по минимальной местностности комнат ceil(number_people / number_rooms) для расселения людей
create or replace view processing_filter_limits 
as select bo.id ord_id, bo.guest_id, bo.company_id,
            b.id proposed_building_id, b.hotel_class_id, bo.arrival_date, bo.departure_date,
            b.total_number_rooms, b.number_beds_in_rooms, 
            bo.number_people, bo.number_rooms
    from booking_order bo join current_b_ord_id cbo on bo.id = cbo.id
    join building b on bo.hotel_class_stars = b.hotel_class_id
    and b.number_beds_in_rooms >= ceil(bo.number_rooms/bo.number_people);

select *
from processing_filter_limits;

-- кол-во свободных номеров на выбранные даты 
-- ищу номера которые заняты на даты заезда и отнимаю от общего кол-ва номеров в корпусе

create or replace view free_rooms_order_dates
as select b.id building_id, b.hotel_class_id, b.total_number_rooms, b.number_beds_in_rooms, 
        nvl(b_num_booked_rooms.num_booked_rooms, 0) num_booked_rooms,
        b.total_number_rooms - nvl(b_num_booked_rooms.num_booked_rooms, 0) num_free_rooms
    from building b left join (
    --подсчёт кол-ва комнат,которые заняты на эти числа для каждого существующего корпуса 
            select bpo.building_id, nvl(sum(bpo.number_rooms), 0) num_booked_rooms,
                    bo.arrival_date, bo.departure_date
            from booking_order bpo cross join booking_order bo
                join current_b_ord_id cbo on bo.id = cbo.id 
            where lower(bpo.order_processing_status) like 'принят'
            and not (
                bo.arrival_date >= bpo.departure_date -- дата приезда и отъезда может совпадать
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
    then 'принят'
    else 'отклонен'
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


update booking_order bo 
set bo.order_processing_status = case when
        (select proposed_building_id from building_view_for_id) is not null and 
        (bo.guest_id in (select id from guest) OR bo.company_id in (select id from company where contract_status = 1))
        then 'принят'
        else 'отклонен'
    end, 
    bo.building_id = case when
        (select proposed_building_id from building_view_for_id) is not null and 
        (bo.guest_id in (select id from guest) OR bo.company_id in (select id from company where contract_status = 1)) 
        then (select proposed_building_id from building_view_for_id)
        else null
    end
    where bo.id = (select * from current_b_ord_id);
    
    select *
    from booking_order;
    
insert into booking_order (
	id, company_id, hotel_class_stars, 
    booking_date, arrival_date, 
    departure_date, number_people, number_rooms
) values (
	seq_booking_order_id.nextval, (select id from company where lower(name_company) like 'незнайка'), 2,
	to_date('29-05-2023', 'dd-mm-yyyy'), to_date('19-06-2023', 'dd-mm-yyyy'), 
	to_date('25-06-2023', 'dd-mm-yyyy'), 3, 3
);
insert into booking_order (
	id, company_id, hotel_class_stars, 
    booking_date, arrival_date, 
    departure_date, number_people, number_rooms
) values( 
	seq_booking_order_id.nextval, (select id from company where lower(name_company) like 'незнайка'), 4, 
	to_date('28-05-2023', 'dd-mm-yyyy'), to_date('23-06-2023', 'dd-mm-yyyy'), 
	to_date('29-06-2023', 'dd-mm-yyyy'), 8, 8
);
insert into booking_order (
	id, company_id, hotel_class_stars, 
    booking_date, arrival_date, 
    departure_date, number_people, number_rooms
) values( 
	seq_booking_order_id.nextval, (select id from company where lower(name_company) like 'незнайка'), 2,	
	to_date('29-05-2023', 'dd-mm-yyyy'), to_date('19-06-2023', 'dd-mm-yyyy'), 
	to_date('25-06-2023', 'dd-mm-yyyy'), 6, 2
);
insert into booking_order (
	id, company_id, hotel_class_stars, 
    booking_date, arrival_date, 
    departure_date, number_people, number_rooms
) values( 
	seq_booking_order_id.nextval, (select id from company where lower(name_company) like 'крыска-лариска'), 4,  
	to_date('31-05-2023', 'dd-mm-yyyy'), to_date('07-06-2023', 'dd-mm-yyyy'),  
	to_date('10-06-2023', 'dd-mm-yyyy'), 5, 2
);
insert into booking_order (
	id, company_id, hotel_class_stars, 
    booking_date, arrival_date, 
    departure_date, number_people, number_rooms
) values( 
	seq_booking_order_id.nextval, null, 4,  
	to_date('31-05-2023', 'dd-mm-yyyy'), to_date('07-06-2023', 'dd-mm-yyyy'),  
	to_date('10-06-2023', 'dd-mm-yyyy'), 5, 2
); 

insert into booking_order (
	id, guest_id, hotel_class_stars, 
    booking_date, arrival_date, 
    departure_date, number_people, number_rooms
) values (
	seq_booking_order_id.nextval, (select id from guest where lower(last_name) like 'пахомов') , 2,
	to_date('25-05-2023', 'dd-mm-yyyy'), to_date('05-06-2023', 'dd-mm-yyyy'), 
	to_date('16-06-2023', 'dd-mm-yyyy'), 1, 1);
    
    
update booking_order 
set payment_status = 'оплачен'
where id = 5;

update booking_order 
set payment_status = 'оплачен'
where id = 2 or id = 3;

select * 
from booking_order;

--обновление статуса оплаты для всех заказов, где разница между днями меньше либо равна 7
update booking_order
set payment_status = 'оплачен'
where ((trunc(arrival_date) - trunc(sysdate) between 0 and 7)
or (trunc(arrival_date) - trunc(booking_date) between 0 and 7 )) 
and order_processing_status like 'принят';

select * 
from booking_order;

-- ------------------------------------------------------------------------
--бронь номера
insert into booking_room (id, booking_order_id, guest_id, room_id)
values (seq_booking_room_id.nextval, 2, (select id from guest where lower(last_name) like 'череватый' 
                and  lower(first_name) like 'владислав'), 1);

insert into booking_room (id, booking_order_id, guest_id, room_id)
values (seq_booking_room_id.nextval, 2, (select id from guest where lower(last_name) like 'джебисашвили'
                and  lower(first_name) like 'лина'), 2);

insert into booking_room (id, booking_order_id, guest_id, room_id)
values (seq_booking_room_id.nextval, 2, (select id from guest where lower(last_name) like 'романова' 
                and  lower(first_name) like 'марьяна'), 3);

insert into booking_room (id, booking_order_id, guest_id, room_id)
values (seq_booking_room_id.nextval, 2, (select id from guest where lower(last_name) like 'гецати'
                and lower(first_name) like 'константин'), 4);

insert into booking_room (id, booking_order_id, guest_id, room_id)
values(seq_booking_room_id.nextval, 3, (select id from guest where lower(last_name) like 'шепс' 
                and  lower(first_name) like 'олег'), 5);

insert into booking_room (id, booking_order_id, guest_id, room_id)
values(seq_booking_room_id.nextval, 3, (select id from guest where lower(last_name) like 'шепс' 
                and  lower(first_name) like 'александр'), 6);

insert into booking_room (id, booking_order_id, guest_id, room_id)
values (seq_booking_room_id.nextval, 3, (select id from guest where lower(last_name) like 'райдос' 
                and  lower(first_name) like 'виктория'), 7);

insert into booking_room (id, booking_order_id, guest_id, room_id)
values (seq_booking_room_id.nextval, 3, (select id from guest where lower(last_name) like 'шевченко' 
                and  lower(first_name) like 'надежда'), 8);

insert into booking_room (id, booking_order_id, guest_id, room_id)
values (seq_booking_room_id.nextval, 3, (select id from guest where lower(last_name) like 'матвеев' 
                and lower(first_name) like 'дмитрий'), 9);

-- -----------------------------
--запись жалоб и предложений
insert into complaints_suggestions (id, booking_room_id, description, on_date)
values (seq_complaints_suggestions_id.nextval, 1, 'В номере не было подачи холодной воды', to_date('16-06-2023', 'dd-mm-yyyy'));

-- услуга номер 

insert into ordering_service (id, on_date, guest_id, services_id, payment_status)
values (seq_ordering_service_id.nextval, to_date('16-06-2023', 'dd-mm-yyyy') ,(select id from guest where lower(last_name) like 'череватый'), 
        (select id from list_services where lower(name_services) like 'бильярд'), 'не оплачено');
        
