import React from "react";
import Avatar from "../Avatar/Avatar";
import morpheus from "../../images/morpheus.png";
import paperplane from "../../images/paperplane.svg";
import "./content.scss";

const Content = () => {
  return (
    <div className="chat__content">
      <div className="chat__content-header">
        <Avatar img={morpheus} width={80} heigth={80} />
        <h3>Morpheus</h3>
      </div>
      <div className="chat__content-main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        saepe. Eaque voluptas necessitatibus, sit fugiat, maiores earum modi
        repudiandae est eveniet cum, doloremque illo accusantium delectus
        asperiores dolorum deleniti commodi! Voluptates, est ratione eius a ad
        eaque dicta. Qui esse doloremque officiis repellendus sequi, iure ad
        porro magnam ipsam distinctio nemo repellat eveniet? Quaerat totam ad
        officiis dolor facilis fugit! Commodi repellat eligendi voluptas
        reiciendis qui placeat, minima possimus error. Numquam molestiae aut,
        molestias nihil quasi adipisci fugiat neque deserunt dolorum voluptate
        ad maxime quos tenetur itaque consectetur voluptatum dolor! Saepe libero
        autem cupiditate molestias tempore cum alias odio magni quam. Iste vel
        exercitationem vitae et. Pariatur voluptas porro tempora qui fugiat enim
        minima blanditiis nobis, totam praesentium illo aperiam? Temporibus
        saepe exercitationem aperiam hic? Sed odio velit consectetur laborum
        doloremque! Ea doloribus eveniet voluptas et? Deserunt numquam ab quasi
        harum assumenda illum praesentium mollitia voluptatibus reiciendis sunt,
        quaerat quos. Maiores, repellendus commodi quis corrupti voluptatibus
        nostrum enim magni eaque voluptatem culpa molestias ducimus perferendis
        quisquam ea laboriosam. Impedit accusantium facilis ipsum nisi nam
        earum, a tempore ipsa doloremque fugiat. Iusto quod alias quos dolore
        odit consequatur optio, veniam corrupti facilis repudiandae aut quaerat
        animi ducimus, nesciunt perspiciatis dolorem quae fugit eos vero sequi
        labore laborum quas! Ipsam, perferendis ex? Sit praesentium tenetur
        omnis minima aut cupiditate consequatur iste eveniet consectetur atque,
        labore repudiandae id architecto illo dolorem dolor ea incidunt,
        laudantium, neque magnam! Ex inventore voluptatibus sed reiciendis hic?
        Minus obcaecati est hic deleniti accusantium quibusdam necessitatibus
        commodi eveniet. Reprehenderit illum iusto quia, totam, nam dolores
        tempora necessitatibus tenetur repudiandae accusantium nemo dolorem ea,
        nulla cumque obcaecati modi deleniti. Temporibus praesentium
        reprehenderit ipsum eos provident tempora fuga ducimus dolore. Possimus
        officia sapiente voluptatem cum architecto error amet laudantium veniam
        unde ipsa? Dolor maxime ea possimus reprehenderit nam tempore
        accusantium!
      </div>
      <div className="chat__content-footer">
        <form className="footer__form" action="#">
          <input
            placeholder="Type your message"
            className="footer__input"
            type="footer__input"
          />
          <img src={paperplane} alt="paperplane" />
        </form>
      </div>
    </div>
  );
};

export default Content;
