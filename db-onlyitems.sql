
CREATE SEQUENCE public.items_item_id_seq;

CREATE TABLE public.items (
                item_id INTEGER NOT NULL DEFAULT nextval('public.items_item_id_seq'),
                descripcion VARCHAR NOT NULL,
                hecho BOOLEAN DEFAULT FALSE NOT NULL,
                fecha_creacion TIMESTAMP NOT NULL,
                fecha_terminado TIMESTAMP,
                CONSTRAINT items_pk PRIMARY KEY (item_id)
);


ALTER SEQUENCE public.items_item_id_seq OWNED BY public.items.item_id;
