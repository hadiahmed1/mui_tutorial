import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import type { dish } from "./Feed";

const Post = ({ card }: { card: dish }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Card sx={{ maxWidth: 345,m:3, boxShadow:3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {card.avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={card.title}
                subheader={card.subheader}
            />
            <CardMedia
                component="img"
                height="30%"
                image={card.imageurl}
                alt={card.title}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {card.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;