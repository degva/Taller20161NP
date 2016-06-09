
CREATE SEQUENCE categoras_categoria_id_seq;

CREATE TABLE categoras (
                categoria_id INTEGER NOT NULL DEFAULT nextval('categoras_categoria_id_seq'),
                cat_nombre VARCHAR NOT NULL,
                fecha_creacion TIMESTAMP NOT NULL,
                CONSTRAINT categoras_pk PRIMARY KEY (categoria_id)
);


ALTER SEQUENCE categoras_categoria_id_seq OWNED BY categoras.categoria_id;

CREATE SEQUENCE items_item_id_seq;

CREATE TABLE items (
                item_id INTEGER NOT NULL DEFAULT nextval('items_item_id_seq'),
                categoria_id INTEGER,
                descripcion VARCHAR NOT NULL,
                hecho BOOLEAN DEFAULT FALSE NOT NULL,
                fecha_creacion TIMESTAMP NOT NULL,
                fecha_terminado TIMESTAMP NOT NULL,
                CONSTRAINT items_pk PRIMARY KEY (item_id)
);


ALTER SEQUENCE items_item_id_seq OWNED BY items.item_id;

ALTER TABLE items ADD CONSTRAINT categor_as_items_fk
FOREIGN KEY (categoria_id)
REFERENCES categoras (categoria_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
