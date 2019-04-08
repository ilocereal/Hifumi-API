import * as React from "react";
import * as B from "bloomer";

export const GuildImage = ({ image, setFocus }) => {
  const tagContent =
    <div className="tags">
      {image.tags.map(t => <B.Tag isColor="warning">{t.name}</B.Tag>)}
    </div>;
  return (
    <B.Card className="guild-image-card">
      <B.CardImage className="guild-image-wrapper" onClick={() => setFocus({ image, open: true })}>
        <img alt="guild-image" src={image.url} className="guild-image"/>
      </B.CardImage>
      <B.CardContent className="image-content">
        <B.Level className="image-poster">
          <B.LevelLeft>
            <B.LevelItem>
              <figure className="is-rounded">
                <B.Image isSize="24x24" src={image.user.avatar}/>
              </figure>
            </B.LevelItem>
            <B.LevelItem>
              @{image.user.name}
            </B.LevelItem>
          </B.LevelLeft>
        </B.Level>
        {image.tags.length > 0 && tagContent}
      </B.CardContent>
    </B.Card>
  );
};
