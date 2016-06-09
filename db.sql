
CREATE SEQUENCE public.categoras_categoria_id_seq;

CREATE TABLE public.categoras (
                categoria_id INTEGER NOT NULL DEFAULT nextval('public.categoras_categoria_id_seq'),
                cat_nombre VARCHAR NOT NULL,
                fecha_creacion TIMESTAMP NOT NULL,
                CONSTRAINT categoras_pk PRIMARY KEY (categoria_id)
);


ALTER SEQUENCE public.categoras_categoria_id_seq OWNED BY public.categoras.categoria_id;

CREATE SEQUENCE public.items_item_id_seq;

CREATE TABLE public.items (
                item_id INTEGER NOT NULL DEFAULT nextval('public.items_item_id_seq'),
                categoria_id INTEGER,
                descripcion VARCHAR NOT NULL,
                hecho BOOLEAN DEFAULT FALSE NOT NULL,
                fecha_creacion TIMESTAMP NOT NULL,
                fecha_terminado TIMESTAMP,
                CONSTRAINT items_pk PRIMARY KEY (item_id)
);


ALTER SEQUENCE public.items_item_id_seq OWNED BY public.items.item_id;

ALTER TABLE public.items ADD CONSTRAINT categor_as_items_fk
FOREIGN KEY (categoria_id)
REFERENCES public.categoras (categoria_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
