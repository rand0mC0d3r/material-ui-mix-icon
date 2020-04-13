# material-ui-mix-icon

Combine 2 icons for status display, exception or variance presentation.

**Purpose**: When having a simple icon to describe one element, sometimes, the element being flavored in specific ways needs a consistent way to describe complex states; e.g:
- *User vs User with Admin Privileges*
- *Server vs Server provisioned with K8s*
- *Email vs Email with Priority* & ...

---

#### Configuration

Variables supported by the library and available knobs for customization. All enforced by PropTypes.

##### Required Properties

- *icon* - Supporting a string or a non `fa` object type
- *extraIcon* - Supporting a string or a non `fa` object type

##### Optional Properties

- *size* - selection from Material UI standard values: small, medium or large. Default: **small**
- *color* - inherited property from Material UI. Possible values: inherit, primary, secondary. Default: **inherit**
- *position* - Placement of extra icon. Possible values: top-start, top-end, bottom-start, bottom-end. Default: **bottom-end**
- *disabled* - Boolean to mark the disabled flag for the icon presentation. Default: **false**

---

#### Usage

Simple usage in Material UI elements, as child element or startIcon or start/endAdornment:

Self contained component with example values:

```
<ComposedIcon
    position='bottom-end'
    color="primary"
    size="large"
    icon='server'
    extraIcon='dharmachakra'
/>
```

Embedded in a button

```
 <Button
    variant="contained"
    color="primary"
    size="small"
    startIcon={
        <ComposedIcon
            position={props.position}
            color="primary"
            size='small'
            icon='server'
            extraIcon='dharmachakra'
        />}
    >
    Sample
</Button>
```

Icon button usage:

```
<IconButton aria-label="sample-icon-button">
    <ComposedIcon
        position={props.position}
        size="large"
        icon='server'
        extraIcon='dharmachakra'
    />
</IconButton>
```

Fab button usage:

```
 <Fab disabled aria-label="like">
    <ComposedIcon
        position={props.position}
        size="large"
        disabled
        icon='server'
        extraIcon='dharmachakra'
    />
</Fab>
```

And also in a field with adornment

```
 <TextField
    id="input-with-icon-textfield"
    label="TextField"
    disabled
    defaultValue="disabled field"
    InputProps={{
    startAdornment: (
        <InputAdornment position="start">
        <ComposedIcon
            position={props.position}
            size="small"
            icon='server'
            extraIcon='dharmachakra'/>
        </InputAdornment>
    ),
    }}
/>
```