import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
export default function TodoItem({item, removeTodo, toggleCheck}) {
    const labelId = `checkbox-list-label-${item.id}`
    return (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={() => removeTodo(item.id)}>
              <CloseRoundedIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={() => toggleCheck(item.id)}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.text} />
          </ListItemButton>
        </ListItem>
      );
}