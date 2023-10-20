import { Card, CardBody, Typography } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import { Fragment, useEffect, useState, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { authorsTableData } from "services/data/data";
import UserHeader from "./UserHeader/UserHeader";
import { selectUserSortData } from "../../services/data/data";
import UserItem from "./UserItem/UserItem";
import { getEndpoint } from "services/api/endpoints";
import { ToastContainer } from "react-toastify";
import ReactPaginate from "react-paginate";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { sidenavTypes, useMaterialTailwindController } from "context";

const Users = () => {
  const queryRef = useRef<string>("");
  const [forceUpdate, setForceUpdate] = useState<number>(0);
  const [list, setList] = useState(authorsTableData);
  const { token } = useSelector((state: any) => state.auth);

  // search functionality
  const [searchValue, setSearchValue] = useState("");
  const [isEmpty, setIsEmpty] = useState<any>(false);

  // new Pagination logic
  const [currentItems, setCurrentItems]: any = useState(list);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useMemo(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(list.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, list]);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % list.length;
    setItemOffset(newOffset);
  };

  // selection sort
  const [selectedType, setSelectedType] = useState<string>();
  const [selectedValue, setSelectedValue] = useState<string>();

  const [selectValData, setSelectValData] = useState<{}>([]);

  function validateData(selectedType: string | undefined) {
    if (selectedType === "profile.allGem") setSelectValData(selectUserSortData[0]);
    if (selectedType === "profile.coin") setSelectValData(selectUserSortData[1]);
    if (selectedType === "createdAt") setSelectValData(selectUserSortData[2]);
    if (selectedType === "profile.soccer_level") setSelectValData(selectUserSortData[3]);
    if (selectedType === "profile.billiard_level") setSelectValData(selectUserSortData[4]);
    if (selectedType === "soccer_total_game") setSelectValData(selectUserSortData[5]);
    if (selectedType === "billiard_total_game") setSelectValData(selectUserSortData[6]);
    if (selectedType === "profile.cup") setSelectValData(selectUserSortData[7]);
    if (selectedType === "profile.soccer_cup") setSelectValData(selectUserSortData[8]);
    if (selectedType === "profile.billiard_cup") setSelectValData(selectUserSortData[9]);
    return;
  }

  const selectedTypeHandler = (event: string) => setSelectedType(event);

  const selectedValueHandler = (event: string) => setSelectedValue(event);

  useMemo(() => {
    validateData(selectedType);
  }, [selectedType]);

  useMemo(() => {
    queryRef.current = `${selectedType}=$${selectedValue}`;
  }, [selectedValue]);

  // ! handleing search function
  useMemo(() => {
    let url = `api/admin/users?userName=${searchValue}`;
    getEndpoint(url, token).then(({ data }) => setList(data));
  }, [searchValue]);

  useMemo(() => {
    fetchUsers();
  }, [isEmpty, forceUpdate]);

  async function fetchUsers() {
    let url = `api/admin/users?${queryRef.current}`;
    getEndpoint(url, token).then(({ data }) => setList(data));
  }
  
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    fetchUsers();
  }, [selectedValue]);

  const arr1 = ["player", "cup", "coin & gem", "banLeague", "canWithdraw", "status", "soccer", "billiard", ""];

  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="flex flex-col gap-2 mt-12 mb-8">
      <Card className={`${sidenavTypes[sidenavType]}`}>
        <ToastContainer />
        <CardHeader title="Users" />
        <CardBody>
          <div className="mx-5">
            <UserHeader
              searchValue={searchValue} selectedType={selectedType}
              selectedTypeHandler={selectedTypeHandler} selectedValue={selectedValue}
              setSearchValue={setSearchValue} selectedValueHandler={selectedValueHandler}
              data={selectValData} setIsEmpty={setIsEmpty} />
          </div>
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {arr1.map((el) => (
                  <th key={el} className="px-5 py-3 text-left border-b border-blue-gray-50">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-center text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item: any) => {
                const className = `py-3 px-5 border-b border-blue-gray-50`;
                return (
                  <Fragment>
                    <tr key={item.id}>
                      <UserItem className={className} item={item} setForceUpdate={setForceUpdate} />
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <ReactPaginate breakLabel={<span className="mr-3">...</span>}
        containerClassName="w-full flex justify-end gap-2 items-center mt-2"
        nextLabel={<span className="paginationArrow"><BiChevronRight size={25} /></span>}
        onPageChange={handlePageClick}
        previousLabel={<span className="paginationArrow"><BiChevronLeft size={25} /></span>}
        pageRangeDisplayed={3} pageCount={pageCount}
        pageLinkClassName="paginationArrow" activeClassName="active" />
    </div>
  );
};
export default Users;