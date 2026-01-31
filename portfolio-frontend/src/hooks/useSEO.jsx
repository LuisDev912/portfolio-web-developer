import { useEffect } from "react";

function setMeta({ name, property, content }) {
    let meta;

    if (name) {
        meta = document.querySelector(`meta[name="${name}"]`);
    } else if (property) {
        meta = document.querySelector(`meta[property="${property}"]`);
    }

    if (!meta) {
        meta = document.createElement("meta");
        if (name) meta.setAttribute("name", name);
        if (property) meta.setAttribute("property", property);
        document.head.appendChild(meta);
    }

    meta.setAttribute("content", content);
};

export function useSEO({ title, description, og, noIndex = false }) {

    useEffect(() => {
        if (title) {
            document.title = title;
        }

        if (description) {
            setMeta({
                name: "description",
                content: description,
            });
        }

        setMeta({
            name: "robots",
            content: noIndex ? "noindex, follow" : "index, follow",
        });

        if (og?.title) {
            setMeta({
                property: "og:title",
                content: og.title,
            });
        }

        if (og?.description) {
            setMeta({
                property: "og:description",
                content: og.description,
            });
        }
    }, [title, description, og, noIndex]);
};