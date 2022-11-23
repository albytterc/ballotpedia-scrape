import { Box, SectionList } from "native-base";

const Races = ({ route }) => {
  let listItems = route.params.listItems;

  return (
    <>
      <SectionList
        background={"white"}
        ListFooterComponent={
          <>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              flexWrap={"wrap"}
            >
              {listItems}
            </Box>
          </>
        }
        sections={[]}
      />
    </>
  );
};

export default Races;
