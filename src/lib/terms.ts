export const normalizeTerm = (value: string) => {
  const base = value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘`]/g, "'")
    .replace(/\s*[,/]\s*/g, " ")
    .replace(/\s+/g, " ");
  const withoutArticle = base.replace(/^(un|une|le|la|les|l')\s+/, "");
  const parts = withoutArticle.split(" ");

  if (parts.length === 2 && parts[1].startsWith(parts[0]) && parts[1].length <= parts[0].length + 3) {
    return parts[0];
  }

  return withoutArticle;
};

export const slugifyTerm = (value: string) =>
  normalizeTerm(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const splitList = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export const uniqueList = (items: string[]) => [...new Set(items.map((item) => item.trim()).filter(Boolean))];
