import Image1 from "../image/image-1.jpg";
import Image2 from "../image/image-2.jpg";
import Image3 from "../image/image-3.jpg";

import ImageCover1 from "../image/harry-potter.jpg";
import ImageCover2 from "../image/encanto.jpg";
import ImageCover3 from "../image/luca.jpg";

export const contentCard = [
  {
    bookId: 1,
    bookTitle: "Encanto",
    bookImage: `${Image2}`,
    bookParagraph:
      "While escaping her home from armed conflict, a young Alma Madrigal loses her husband Pedro but saves her triplet infant children Julieta, Pepa, and Bruno. The candle Alma carries with her becomes magical and creates a sentient house, the Casita, for the Madrigals to live in.",
    bookCategory: "Fantasy",
    bookReleased: "24 November 2021",
    bookStatus: "Available",
    bookCover: `${ImageCover2}`,
    bookWriter: "Disney",
  },
  {
    bookId: 2,
    bookTitle: "Harry Potter",
    bookImage: `${Image1}`,
    bookParagraph:
      "Ten-year-old Harry Potter is an orphan who lives in the fictional London suburb of Little Whinging, Surrey, with the Dursleys: his uncaring Aunt Petunia, loathsome Uncle Vernon, and spoiled cousin Dudley.",
    bookCategory: "Novel",
    bookReleased: "21 July 2007",
    bookStatus: "Not Available",
    bookCover: `${ImageCover1}`,
    bookWriter: "J. K. Rowling",
  },
  {
    bookId: 3,
    bookTitle: "Luca",
    bookImage: `${Image3}`,
    bookParagraph:
      "Luca Paguro is a pre-teen sea monster living off the coast of the Italian city of Portorosso who spends his days herding a school of fish. His parents, Daniela and Lorenzo, restrict him from going to the surface out of fear, but doing the same thing day after day ends up making Luca bored.",
    bookCategory: "Comic",
    bookReleased: "18 Juni 2021",
    bookStatus: "Available",
    bookCover: `${ImageCover3}`,
    bookWriter: "Disney",
  },
];
