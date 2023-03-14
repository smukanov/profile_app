import useSWRInfinite from "swr/infinite";
import { fetchCitiesList, fetchCountriesList } from "../axios/fetchers";
import { Box } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  Gender,
  selectGender,
  selectUserName,
  setUserName,
  setGender,
  selectCountryOfResidenceId,
  setCountryOfResidence,
  selectCityOfResidenceId,
  setCityOfResidence,
  selectActivities,
  Activity,
  addActivity,
  setActivity,
} from "../redux/reducers/profile_reducer";
import { IconButton, Input, Select, TextArea } from "../ui";

const getList = (value: any[]) => {
  const list: any[] = [];
  value.forEach((item) => {
    //@ts-ignore
    list.push(...item.data);
  });
  return list;
};

const genderOptions = [
  { label: "Male", value: Gender.Male },
  { label: "Female", value: Gender.Female },
];

export const ProfileView = () => {
  const { name, surname } = useAppSelector(selectUserName);
  const gender = useAppSelector(selectGender);
  const country = useAppSelector(selectCountryOfResidenceId);
  const city = useAppSelector(selectCityOfResidenceId);
  const activities = useAppSelector(selectActivities);
  const dispatch = useAppDispatch();

  const {
    data: countryData,
    setSize: setCountrySize,
    isLoading: isLoadingCountry,
  } = useSWRInfinite((index) => {
    const limit = 10;
    const offset = index * limit;
    return `countries/?limit=${limit}&offset=${offset}&ordering=id`;
  }, fetchCountriesList);

  const {
    data: citiesData,
    setSize: setCitySize,
    isLoading: isLoadingCity,
  } = useSWRInfinite((index) => {
    if (!country) {
      return null;
    }
    const limit = 10;
    const offset = index * limit;
    return `cities/?limit=${limit}&offset=${offset}&country=${country.id}&ordering=id`;
  }, fetchCitiesList);

  return (
    <div>
      <h1 className="text-4xl mb-14">Profile</h1>
      <div className="children-except-first:mt-14">
        <Box className="children-except-first:mt-5" width={440}>
          <Input
            label="Name"
            value={name}
            onChange={(e) => {
              dispatch(setUserName({ name: e.target.value, surname }));
            }}
          />
          <Input
            label="Surname"
            value={surname}
            onChange={(e) => {
              dispatch(setUserName({ name, surname: e.target.value }));
            }}
          />
        </Box>

        <div>
          <h2 className="mb-2">Demographics</h2>
          <Box className="children-except-first:mt-5" width={440}>
            <Select
              label="Gender"
              value={genderOptions.find(({ value }) => value === gender)!}
              options={genderOptions}
              onChange={(value) => dispatch(setGender(value!.value))}
            />
            {/* @ts-ignore */}
            <Select
              label="Country of Residence"
              value={
                country ? { label: country.name, value: country.id } : null
              }
              options={
                countryData
                  ? getList(countryData).map((i) => ({
                      label: i.name,
                      value: i.id,
                    }))
                  : []
              }
              onChange={(value) => {
                dispatch(
                  setCountryOfResidence({
                    id: value!.value,
                    name: value!.label,
                  })
                );
                dispatch(setCityOfResidence(null));
              }}
              onMenuScrollToBottom={() => {
                if (isLoadingCountry) {
                  return;
                }
                setCountrySize((prev) => prev + 1);
              }}
            />
            <Select
              label="City of Residence"
              value={city ? { label: city.name, value: city.id } : null}
              options={
                citiesData
                  ? getList(citiesData).map((i) => ({
                      label: i.name,
                      value: i.id,
                    }))
                  : []
              }
              onChange={(value) =>
                dispatch(
                  setCityOfResidence({ id: value!.value, name: value!.label })
                )
              }
              onMenuScrollToBottom={() => {
                if (isLoadingCity) {
                  return;
                }
                setCitySize((prev) => prev + 1);
              }}
            />
          </Box>
        </div>

        <div>
          <h2 className="mb-2">Activities</h2>
          <Box width={716}>
            {activities.map(({ name, description, activity }, index) => (
              <div className="children-except-first:mt-5" key={index}>
                <div>
                  <div className="mb-2">Activity type</div>
                  <label className="inline-flex items-center mr-5">
                    <input
                      className="mr-1"
                      style={{ width: 28, height: 28 }}
                      type="radio"
                      checked={activity === Activity.Extracurriculars}
                      onChange={() =>
                        dispatch(
                          setActivity({
                            index,
                            value: {
                              ...activities[index],
                              activity: Activity.Extracurriculars,
                            },
                          })
                        )
                      }
                    />
                    Extracurriculars
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      className="mr-1"
                      style={{ width: 28, height: 28 }}
                      type="radio"
                      checked={activity === Activity.Honors}
                      onChange={() =>
                        dispatch(
                          setActivity({
                            index,
                            value: {
                              ...activities[index],
                              activity: Activity.Honors,
                            },
                          })
                        )
                      }
                    />
                    Honors
                  </label>
                </div>
                <Input label="Activity name" value={name} onChange={event => {
                  dispatch(
                    setActivity({
                      index,
                      value: {
                        ...activities[index],
                        name: event.target.value
                      }
                    })
                  )
                }} />
                <TextArea label="Description" value={description} onChange={event => {
                  dispatch(
                    setActivity({
                      index,
                      value: {
                        ...activities[index],
                        description: event.target.value
                      }
                    })
                  )
                }} />
              </div>
            ))}
            <IconButton
              className="mt-5"
              text="Add Activity"
              onClick={() => {
                dispatch(addActivity());
              }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};
